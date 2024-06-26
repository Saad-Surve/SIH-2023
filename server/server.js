const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const { errorHandler } = require("./middleware/Error");
const connectDB = require("./config/db");
const textToSpeech = require("@google-cloud/text-to-speech");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;
connectDB();

app.use(express.urlencoded({ extended: true }));
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server Started On http://localhost:${PORT}`);
});
app.use("/uploads", express.static("uploads"));
app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/Auth.routes"));
app.use("/api/client", require("./routes/Client.routes"));
app.use("/api/admin", require("./routes/Admin.routes"));
app.use("/api/lawyer", require("./routes/Lawyer.routes"));
app.use("/api/user", require("./routes/User.routes"));
app.use("/api/community", require("./routes/CommunityConnect.routes"));
app.use("/api/websiteContent", require("./routes/WebsiteContent.routes"));
app.use("/api/search", require("./routes/search.routes"));

const client = new textToSpeech.TextToSpeechClient();

app.post("/convertTextToMp3", async (req, res) => {
  try {
    const text = req.body.text;
    const languageCode = req.body.languageCode; 
    const request = {
      input: { text: text },
      voice: { languageCode: languageCode||'en-IN', ssmlGender: "NEUTRAL" },
      audioConfig: { audioEncoding: "MP3" },
    };
    const [response] = await client.synthesizeSpeech(request);

    // Sending the audio content as base64
    const audioContentBase64 = response.audioContent.toString("base64");
    res.json({ audioContentBase64 });
  } catch (error) {
    console.error("Error generating speech:", error.message);
    res.status(500).send("Error generating speech");
  }
});

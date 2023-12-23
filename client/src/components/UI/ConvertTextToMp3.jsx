// import react from "react";
import { useState } from "react";
import axios from "axios";
import { franc } from "franc";

// In your module's configuration (e.g., botfile.js)

const onBotMessage = async (state, event) => {
  // Log the bot's message
  console.log("Bot Message:", event.text);

  // Perform any other custom logic here

  // Continue the bot's flow
  return state;
};

const ConvertTextToMp3 = () => {
  //   const [inputText, setInputText] = useState("");
  const [loading, setLoading] = useState(false);
  let audio;

  //   const handleInputChange = (e) => {
  //     setInputText(e.target.value);
  //   };

  const handleGenerateSpeech = async () => {
    // const lastMessage = document
    //   .querySelector("iframe")
    //   .contentWindow.contentDocument.querySelector(".root").innerText;
    const map = {
      eng: "en-US",
      hin: "hi-IN",
      ben: "bn-IN",
      kan: "kn-IN",
      pan: "pa-IN",
      guj: "gu-IN",
    };
    try {
      setLoading(true); // Set loading to true when starting the request
      const get = await axios.get(
        "https://sih-message.onrender.com/message/LwXTgzrTyZ3LPjPCTxDaMkqLj6nDMzzN"
      );
      console.log(get);
      const response = await axios.post(
        "http://localhost:5000/convertTextToMp3",
        {
          text: get.data.message,
          languageCode: map[franc(get.data.message)],
        }
      );
      console.log(response);

      //   Assuming the backend returns the MP3 content as base64
      const audioData = response.data.audioContentBase64;

      // Convert base64 to a Blob
      const blob = new Blob(
        [
          new Uint8Array(
            atob(audioData)
              .split("")
              .map((char) => char.charCodeAt(0))
          ),
        ],
        { type: "audio/mp3" }
      );

      // Create a URL for the Blob
      const url = URL.createObjectURL(blob);

      // Play the audio
      if (audio) {
        audio.pause();
        audio = null;
      }

      audio = new Audio(url);

      audio.onended = () => {
        setLoading(false); // Set loading to false when audio playback ends
      };

      audio.play();
    } catch (error) {
      console.error("Error generating speech:", error.message);
      setLoading(false); // Set loading to false in case of an error
    }
    // console.log(lastMessage);
  };

  return (
    <div className="fixed  z-[9999] bottom-20 right-10">
      <button onClick={handleGenerateSpeech}>Generate Speech</button>

      {loading && <p>Speaking</p>}
    </div>
  );
};

export default ConvertTextToMp3;

export const obj = {
  hooks: {
    "after.outgoing.bot": onBotMessage,
  },
};

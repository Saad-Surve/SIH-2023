const express = require('express');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const { SpeechClient } = require('@google-cloud/speech');
const cors = require('cors');

const app = express();
const port = 3000;

// Path to your service account JSON file
const serviceAccountKeyPath = '../trial_python/credentials.json';

// Creates a client with the service account key
const client = new SpeechClient({
  keyFilename: serviceAccountKeyPath,
});

app.use(bodyParser.json());
app.use(cors());
app.use(fileUpload());

app.post('/transcribe', async (req, res) => {
  try {
    if (!req.files || !req.files.audio) {
      return res.status(400).json({ error: 'No audio file was uploaded.' });
    }

    const audioFile = req.files.audio;

    // The audio file's encoding, sample rate in hertz, and BCP-47 language code
    const audio = {
      content: audioFile.data.toString('base64'),
    };

    const config = {
      encoding: 'LINEAR16', // Adjust the encoding based on your audio file format
      sampleRateHertz: 48000, // Adjust the sample rate based on your audio file
      languageCode: 'en-US',
    };

    const request = {
      audio: {
        content: audio.content,
      },
      config: config,
    };

    // Detects speech in the audio file
    const [response] = await client.recognize(request);
    const transcription = response.results
      .map(result => result.alternatives[0].transcript)
      .join('\n');

    res.json({ transcription });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

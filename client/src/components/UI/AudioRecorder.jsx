import React, { useState } from 'react';

const AudioRecorder = () => {
  const [transcription, setTranscription] = useState('');
  const [recording, setRecording] = useState(false);

  const startRecording = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mediaRecorder = new MediaRecorder(stream);
      const chunks = [];

      mediaRecorder.ondataavailable = (event) => {
        if (event.data.size > 0) {
          chunks.push(event.data);
        }
      };

      mediaRecorder.onstop = async () => {
        const audioBlob = new Blob(chunks, { type: 'audio/mp3' });

        // Send the recorded audio to the server
        await submitAudio(audioBlob);

        // Reset the recording state
        setRecording(false);
      };

      mediaRecorder.start();
      setRecording(true);

      // Stop recording after 10 seconds (adjust as needed)
      setTimeout(() => {
        mediaRecorder.stop();
      }, 1000);
    } catch (error) {
      console.error('Error starting recording:', error.message);
    }
  };

  const submitAudio = async (audioBlob) => {
    const formData = new FormData();
    formData.append('audio', audioBlob);

    try {
      const response = await fetch('http://localhost:3000/transcribe', {
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data)
        setTranscription(data.transcription);
      } else {
        console.error('Server Error:', response.statusText);
      }
    } catch (error) {
      console.error('Network Error:', error.message);
    }
  };

  return (
    <div>
      <button onClick={startRecording} disabled={recording}>
        Start Recording
      </button>
      {recording && <p>Recording...</p>}
      {transcription && <p>Transcription: {transcription}</p>}
    </div>
  );
};

export default AudioRecorder;

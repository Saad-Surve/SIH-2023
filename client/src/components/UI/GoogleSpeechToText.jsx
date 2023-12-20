// SpeechToText.js
import React, { useState, useRef } from 'react';

const GoogleSpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  const mediaRecorderRef = useRef(null);
  const chunksRef = useRef([]);

  const handleToggleRecording = () => {
    if (isRecording) {
      stopRecording();
    } else {
      startRecording();
    }

    setIsRecording(!isRecording);
  };

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = handleDataAvailable;
        mediaRecorder.onstop = handleRecordingStopped;

        mediaRecorder.start();
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  };

  const stopRecording = () => {
    if (mediaRecorderRef.current && mediaRecorderRef.current.state === 'recording') {
      mediaRecorderRef.current.stop();
    }
  };

  const handleDataAvailable = (event) => {
    if (event.data.size > 0) {
      chunksRef.current.push(event.data);
    }
  };

  const handleRecordingStopped = () => {
    const audioBlob = new Blob(chunksRef.current, { type: 'audio/wav' });
    const audioContent = URL.createObjectURL(audioBlob);

    sendAudioToServer(audioContent);
    chunksRef.current = [];

    if (mediaRecorderRef.current) {
      mediaRecorderRef.current.ondataavailable = null;
      mediaRecorderRef.current.onstop = null;
      mediaRecorderRef.current = null;
    }
  };

  const sendAudioToServer = async (audioContent) => {
    try {
      const response = await fetch('http://localhost:5000/transcribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ audioContent }),
      });

      const data = await response.json();
      setTranscript(data.transcription);
    } catch (error) {
      console.error('Error:', error);
      setTranscript('Error during transcription');
    }
  };

  return (
    <div>
      <h1>Google Speech to Text</h1>
      <p>{transcript}</p>
      <button onClick={handleToggleRecording}>{isRecording ? 'Stop Recording' : 'Start Recording'}</button>
    </div>
  );
};

export default GoogleSpeechToText;

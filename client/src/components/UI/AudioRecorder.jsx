import React, { useState, useRef } from 'react';
import axios from 'axios';

const AudioRecorder = () => {
  const [recording, setRecording] = useState(false);
  const [audioBlob, setAudioBlob] = useState(null);
  const [transcripts, setTranscripts] = useState([]);
  const [loading, setLoading] = useState(false);
  const mediaRecorderRef = useRef(null);
  const audioChunksRef = useRef([]);

  const startRecording = () => {
    navigator.mediaDevices.getUserMedia({ audio: true })
      .then((stream) => {
        const mediaRecorder = new MediaRecorder(stream);
        mediaRecorderRef.current = mediaRecorder;

        mediaRecorder.ondataavailable = (event) => {
          if (event.data.size > 0) {
            audioChunksRef.current.push(event.data);
          }
        };

        mediaRecorder.onstop = async () => {
          const audioBlob = new Blob(audioChunksRef.current, { type: 'audio/mp3' });
          setAudioBlob(audioBlob);
          setRecording(false);
          audioChunksRef.current = [];
        };

        mediaRecorder.start();
        setRecording(true);
      })
      .catch((error) => {
        console.error('Error accessing microphone:', error);
      });
  };

  const stopRecording = () => {
    const mediaRecorder = mediaRecorderRef.current;

    if (mediaRecorder && recording) {
      mediaRecorder.stop();
    }
  };

  const downloadAudio = () => {
    if (audioBlob) {
      const downloadLink = document.createElement('a');
      downloadLink.href = URL.createObjectURL(audioBlob);
      downloadLink.download = 'recorded_audio.mp3';
      document.body.appendChild(downloadLink);
      downloadLink.click();
      document.body.removeChild(downloadLink);
    }
  };

  const sendToServer = async () => {
    if (audioBlob) {
      setLoading(true);
      console.log(audioBlob.size)

      try {
        const response = await axios.post('http://127.0.0.1:5001/transcribe', audioBlob, {
          headers: {
            'Content-Type': 'audio/mp3',
          },
        });

        setTranscripts(response.data.transcripts);
      } catch (error) {
        console.error('Error sending audio to server:', error);
      } finally {
        setLoading(false);
      }
    }
  };

  return (
    <div>
      <h1>Audio Recorder</h1>
      <button onClick={startRecording} disabled={recording}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={!recording}>
        Stop Recording
      </button>
      <button onClick={downloadAudio} disabled={!audioBlob}>
        Download Audio
      </button>
      <button onClick={sendToServer} disabled={!audioBlob || loading}>
        {loading ? 'Transcribing...' : 'Send to Server'}
      </button>
    </div>
  );
};

export default AudioRecorder;

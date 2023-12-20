import React from "react";
import { useReactMediaRecorder } from "react-media-recorder";

const AudioRecorder = () => {
  const { status, startRecording, stopRecording, mediaBlobUrl } = useReactMediaRecorder({
    audio: true,
  });

  const sendAudioToBackend = async () => {
    try {
      const formData = new FormData();
      formData.append("audio", await fetch(mediaBlobUrl).then(res => res.blob()));

      const response = await fetch("http://localhost:3000/transcribe", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Transcription:", data.transcription);
      } else {
        console.error("Server Error:", response.statusText);
      }
    } catch (error) {
      console.error("Network Error:", error.message);
    }
  };

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording} disabled={status === "recording"}>
        Start Recording
      </button>
      <button onClick={stopRecording} disabled={status !== "recording"}>
        Stop Recording
      </button>
      {mediaBlobUrl && (
        <>
          <audio src={mediaBlobUrl} controls autoPlay loop />
          <button onClick={sendAudioToBackend}>Send to Backend</button>
        </>
      )}
    </div>
  );
};

export default AudioRecorder;

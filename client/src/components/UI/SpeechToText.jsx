import React from 'react';
import useSpeechToText from 'react-hook-speech-to-text';

export default function SpeechToText() {
  const {
    error,
    interimResult,
    isRecording,
    results,
    startSpeechToText,
    stopSpeechToText,
  } = useSpeechToText({
    continuous: true,
    useLegacyResults: false
  });

  if (error) return <p>Web Speech API is not available in this browser 🤷‍</p>;
  if(!isRecording){
    console.log(results.at(-1))
    window.botpressWebChat.sendPayload({ type: 'text', text: results.at(-1).transcript})
  }
  return (
    <div>
      <h1>Recording: {isRecording.toString()}</h1>
      <button onClick={isRecording ? stopSpeechToText : startSpeechToText}>
        {isRecording ? 'Stop Recording' : 'Start Recording'}
      </button>
      <ul>
        {/* {results.map((result) => (
          <li key={result.timestamp}>{result.transcript}</li>
        ))} */}
        {interimResult && <li>{interimResult}</li>}
      </ul>
    </div>
  );
}
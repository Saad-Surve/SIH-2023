import { Icon } from '@iconify/react';
import React, { useState } from 'react';


const SpeechToText = () => {
  const [transcript, setTranscript] = useState('');
  const [isRecording, setIsRecording] = useState(false);
  let recognition = null;

  const initializeRecognition = () => {
    if ('SpeechRecognition' in window || 'webkitSpeechRecognition' in window) {
      // Use the standard or webkit-prefixed SpeechRecognition object
      recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
      recognition.lang = 'en-US';
      recognition.onresult = handleResult;
    } else {
      console.error('Speech recognition is not supported in this browser.');
    }
  };

  const handleToggleRecording = () => {
    if (isRecording) {
      recognition.stop();
    } else {
      if (!recognition) {
        initializeRecognition();
      }
      recognition.start();
    }
    
    setIsRecording(!isRecording);
  };

  const handleResult = (event) => {
    const result = event.results[0][0].transcript;
    setTranscript(result);
    handleSendPayload(result);
    setIsRecording(false)
  };

  const handleSendPayload = (text) => {
    // Replace this with your code to send the payload
    window.botpressWebChat.sendPayload({ type: 'text', text });
  };

  return (
    <div className='flex fixed z-[9999] right-10 bottom-10 '>
      
      <button onClick={handleToggleRecording}>{!isRecording ? <Icon icon={'material-symbols:mic'} className='w-8 h-8' /> : <Icon icon={'ph:waveform'} className='w-8 h-8' /> }</button>
    </div>
  );
};

export default SpeechToText;

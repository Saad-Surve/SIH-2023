from google.cloud import speech as speech
from google.oauth2 import service_account
import os

def transcribe_audio(audio_file_path):
    credentials_path = '../trial_python/credentials.json'
    credentials = service_account.Credentials.from_service_account_file(credentials_path)

    client = speech.SpeechClient(credentials=credentials)

    with open(audio_file_path, "rb") as audio_file:
        content = audio_file.read()
    
    audio = speech.RecognitionAudio(content=content)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        language_code="bn-IN",
    )

    response = client.recognize(config=config, audio=audio)

    for result in response.results:
        print("Transcript: {}".format(result.alternatives[0].transcript))

if __name__ == "__main__":
    audio_file_path = "audio.wav"  # Replace with the path to your audio file
    transcribe_audio(audio_file_path)

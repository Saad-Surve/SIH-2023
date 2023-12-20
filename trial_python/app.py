import io
import sounddevice as sd
from google.cloud import speech as speech
from google.oauth2 import service_account

def record_audio(file_path, duration=5, sample_rate=16000):
    print("Recording... Speak now!")
    audio_data = sd.rec(int(duration * sample_rate), samplerate=sample_rate, channels=1, dtype="int16")
    sd.wait()  # Wait for recording to finish

    with io.open(file_path, "wb") as audio_file:
        audio_file.write(audio_data.tobytes())

    print(f"Audio recorded and saved to {file_path}")

def transcribe_audio(file_path, credentials_path):
    credentials = service_account.Credentials.from_service_account_file(credentials_path)
    client = speech.SpeechClient(credentials=credentials)

    with io.open(file_path, "rb") as audio_file:
        content = audio_file.read()

    audio = speech.RecognitionAudio(content=content)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        sample_rate_hertz=48000,
        language_code="en-US",
    )

    response = client.recognize(config=config, audio=audio)

    for result in response.results:
        print("Transcript: {}".format(result.alternatives[0].transcript))

if __name__ == "__main__":
    audio_file_path = "./audios/file.wav"
    credentials_path = "./credentials.json"

    record_audio(audio_file_path)
    transcribe_audio(audio_file_path, credentials_path)

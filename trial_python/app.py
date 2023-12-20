from flask import Flask, request, jsonify
from google.cloud import speech_v1p1beta1 as speech
from google.oauth2 import service_account
from flask_cors import CORS
from pydub import AudioSegment
import io

app = Flask(__name__)
CORS(app)

def transcribe_audio(content, language_code):
    credentials_path = '../trial_python/credentials.json'  # Replace with the actual path
    credentials = service_account.Credentials.from_service_account_file(credentials_path)

    client = speech.SpeechClient(credentials=credentials)

    audio = speech.RecognitionAudio(content=content)
    config = speech.RecognitionConfig(
        encoding=speech.RecognitionConfig.AudioEncoding.LINEAR16,
        language_code=language_code,
    )

    try:
        response = client.recognize(config=config, audio=audio)

        transcripts = []
        for result in response.results:
            transcripts.append(result.alternatives[0].transcript)

        return transcripts
    except Exception as e:
        return str(e)

@app.route('/transcribe', methods=['POST'])
def transcribe_endpoint():
    if 'audio' not in request.files:
        return jsonify({"error": "No audio file provided"}), 400

    audio_file = request.files['audio']
    language_code = request.headers.get('language_code', 'en-US')

    if audio_file.filename == '':
        return jsonify({"error": "No selected file"}), 400

    # Ensure the file extension is 'mp3'
    if not audio_file.filename.lower().endswith('.mp3'):
        return jsonify({"error": "Invalid file format. Expected '.mp3'"}), 400

    try:
        # Convert MP3 to WAV
        audio = AudioSegment.from_mp3(audio_file)
        wav_data = audio.raw_data

        # Transcribe the audio content
        transcripts = transcribe_audio(wav_data, language_code)

        return jsonify({"transcripts": transcripts})
    except Exception as e:
        return jsonify({"error": str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True, port=5001)

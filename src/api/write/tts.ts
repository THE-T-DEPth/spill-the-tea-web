import axios from 'axios';

export async function postTTS(voice_name: string, text: string) {
  try {
    const voice = {
      languageCode: 'ko-KR', // languageCode를 올바르게 설정
      name: voice_name, // voice_name은 외부에서 전달된 값으로 가정
    };
    // console.log(voice.name);

    // 텍스트 및 오디오 설정
    const input = { text: text }; // 텍스트는 객체 형태로 전달
    const audioConfig = { audioEncoding: 'MP3' }; // audioConfig는 객체로 전달

    // API 요청에 필요한 데이터 구조
    const data = {
      voice,
      input,
      audioConfig,
    };

    const response = await axios.post(
      `https://texttospeech.googleapis.com/v1/text:synthesize?key=AIzaSyDzUdXhyZ2Doth0AsNmCCkUg4V8uu0TPoo`,
      data
    );

    const audioContent = response.data.audioContent;

    if (audioContent) {
      const audioFile = new Audio();
      const audioBlob = base64ToBlob(audioContent, 'audio/mp3'); // base64 변환 함수 필요
      audioFile.src = URL.createObjectURL(audioBlob);
      audioFile.playbackRate = 1; // 재생 속도 설정
      audioFile.play();
    } else {
      console.error('Audio content is empty');
    }
  } catch (error) {
    console.log('postTTS 중 오류 발생', error);
    throw error;
  }
}

// Helper function: base64 문자열을 Blob으로 변환
function base64ToBlob(base64: string, mimeType: string): Blob {
  const byteCharacters = atob(base64); // Base64 디코딩
  const byteNumbers = new Array(byteCharacters.length)
    .fill(0)
    .map((_, i) => byteCharacters.charCodeAt(i));
  const byteArray = new Uint8Array(byteNumbers); // Uint8Array 생성
  return new Blob([byteArray], { type: mimeType }); // Blob 생성
}

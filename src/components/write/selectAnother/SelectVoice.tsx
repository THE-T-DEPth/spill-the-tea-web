import React, { useRef, useState } from 'react';
import Play from '../../../assets/Images/Play.svg';
import Playing from '../../../assets/Images/Playing.svg';
import * as S from '../../../styles/Write/SelectAnotherComponentStyle';
import { postTTS } from '../../../api/write/tts';

interface VoiceOptionsProps {
  ttsInput: string;
  selectedVoice: string;
  handleVoiceClick: (voice: string) => void;
}

const SelectVoice: React.FC<VoiceOptionsProps> = ({
  ttsInput,
  selectedVoice,
  handleVoiceClick,
}) => {
  const [manVoice, setManVoice] = useState<boolean>(false);
  const [womanVoice, setWomanVoice] = useState<Boolean>(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);

  const handlePlay = async (voice_name: string) => {
    if (ttsInput == '') {
      alert('글 내용이 없습니다.');
      return;
    }

    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current = null;
      setManVoice(false);
      setWomanVoice(false);
      return;
    }

    try {
      let voiceId = '';
      if (voice_name === '차분한 성인 남성') {
        voiceId = 'ko-KR-Standard-C';
        setManVoice(true);
      } else if (voice_name === '차분한 성인 여성') {
        voiceId = 'ko-KR-Standard-A';
        setWomanVoice(true);
      }

      // 🔹 postTTS에서 Audio 객체를 받아옴
      const audio = await postTTS(voiceId, ttsInput);
      audioRef.current = audio ? audio : null;

      if (audio) {
        audio?.play();
        audio.onended = () => {
          setManVoice(false);
          setWomanVoice(false);
          audioRef.current = null;
        };
      }
    } catch (error) {
      console.log('fetch 중 에러 발생', error);
    }
  };

  return (
    <>
      <S.VoiceSelectDiv
        onClick={() => {
          handleVoiceClick('차분한 성인 남성');
        }}
        style={{
          backgroundColor:
            selectedVoice === '차분한 성인 남성' ? 'var(--Green1)' : 'white',
        }}>
        <p style={{ marginLeft: '20px' }}>차분한 성인 남성</p>
        <S.PlayImg
          src={!manVoice ? Play : Playing}
          onClick={() => {
            handlePlay('차분한 성인 남성');
          }}
        />
      </S.VoiceSelectDiv>
      <S.VoiceSelectDiv
        onClick={() => {
          handleVoiceClick('차분한 성인 여성');
        }}
        style={{
          backgroundColor:
            selectedVoice === '차분한 성인 여성' ? 'var(--Green1)' : 'white',
        }}>
        <p style={{ marginLeft: '20px' }}>차분한 성인 여성</p>
        <S.PlayImg
          src={!womanVoice ? Play : Playing}
          onClick={() => {
            handlePlay('차분한 성인 여성');
          }}
        />
      </S.VoiceSelectDiv>
      <S.VoiceSelectedDiv>
        <S.SelectedVoice>선택</S.SelectedVoice>
        <S.SelectedVoiceText>{selectedVoice}</S.SelectedVoiceText>
      </S.VoiceSelectedDiv>
    </>
  );
};

export default SelectVoice;

import React, { useState } from 'react';
import Play from '../../../assets/images/Play.svg';
import Playing from '../../../assets/images/Playing.svg';
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

  const handlePlay = async (voice_name: string) => {
    if (ttsInput == '') {
      alert('글 내용이 없습니다.');
      return;
    }
    try {
      if (voice_name == '차분한 성인 남성' && !manVoice && !womanVoice) {
        await postTTS('ko-KR-Standard-C', ttsInput);
        setManVoice(true);
        setTimeout(() => {
          setManVoice(false);
        }, ttsInput.length * 150);
      } else if (voice_name == '차분한 성인 여성' && !womanVoice && !manVoice) {
        await postTTS('ko-KR-Standard-A', ttsInput);
        setWomanVoice(true);
        setTimeout(() => {
          setWomanVoice(false);
        }, ttsInput.length * 150);
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

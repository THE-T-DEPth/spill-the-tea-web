import React from 'react';
import Play from '../../../assets/images/Play.svg';
import * as S from '../../../styles/Write/SelectAnotherComponentStyle';

interface VoiceOptionsProps {
  ttsInput: string;
  selectedVoice: string;
  handleVoiceClick: (voice: string) => void;
  speak: (textToRead: string, synth: SpeechSynthesis) => void;
}

const SelectVoice: React.FC<VoiceOptionsProps> = ({
  ttsInput,
  selectedVoice,
  handleVoiceClick,
  speak,
}) => {
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
          src={Play}
          onClick={() => {
            speechSynthesis.cancel();
            speak(ttsInput, window.speechSynthesis);
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
          src={Play}
          onClick={() => {
            speechSynthesis.cancel();
            speak(ttsInput, window.speechSynthesis);
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

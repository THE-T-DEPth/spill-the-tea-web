import * as S from '../../../styles/Write/SelectAnotherComponentStyle';

interface ABtnProps {
  type: string;
  selectedType: string;
  handleTypeClick: (value: string) => void;
}

const AnotherBtn: React.FC<ABtnProps> = ({
  type,
  selectedType,
  handleTypeClick,
}) => {
  const isSelected = selectedType === type;

  return (
    <S.AnotherBtn
      onClick={() => {
        handleTypeClick(type);
      }}
      style={{
        color: isSelected ? 'var(--Green3)' : 'var(--G4)',
      }}>
      {type}
    </S.AnotherBtn>
  );
};

export default AnotherBtn;

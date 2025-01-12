import React from 'react';
import * as S from '../../../styles/Write/SelectAnotherComponentStyle';

interface KeywordTypeSelectorProps {
  selectedKeywordType: number;
  handleKeywordType: (type: number) => void;
}

const SelectKeywordType: React.FC<KeywordTypeSelectorProps> = ({
  selectedKeywordType,
  handleKeywordType,
}) => {
  const keywordTypes = [
    { id: 1, label: '감정/관계' },
    { id: 2, label: '일상/삶' },
    { id: 3, label: '취미/관심사' },
    { id: 4, label: '상상/가상' },
    { id: 5, label: '고민/조언' },
  ];

  return (
    <>
      {keywordTypes.map((type) => (
        <S.KeywordType
          key={type.id}
          onClick={() => handleKeywordType(type.id)}
          style={{
            backgroundColor:
              selectedKeywordType === type.id
                ? 'var(--Green3)'
                : 'var(--Yellow)',
            ...(type.id === 5 ? { border: 'none' } : {}),
          }}>
          {type.label}
        </S.KeywordType>
      ))}
    </>
  );
};

export default SelectKeywordType;

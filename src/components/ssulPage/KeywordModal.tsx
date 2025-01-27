import React, { useState, useEffect } from 'react';
import * as S from '../../styles/ssulPage/KeywordModalStyle';
import CloseIcon from '../../assets/Images/closeIcon.svg';
import CategoryBar from './CategoryBar';
import SelectedKeywordsBar from './SelectedKeywordsBar';

interface KeywordModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedKeywords: string[];
  addKeyword: (keyword: string) => void;
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const KeywordModal: React.FC<KeywordModalProps> = ({
  isOpen,
  onClose,
  selectedKeywords,
  addKeyword,
  selectedCategory,
  setSelectedCategory,
}) => {
  const [tempSelectedKeywords, setTempSelectedKeywords] = useState<string[]>(
    []
  );

  // 모달이 열릴 때 `selectedKeywords`로 임시 배열 초기화
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'; // 스크롤 방지
      setTempSelectedKeywords([...selectedKeywords]);
    } else {
      document.body.style.overflow = 'auto'; // 원래대로 복구
    }

    return () => {
      document.body.style.overflow = 'auto';
    };
  }, [isOpen, selectedKeywords]);

  // 키워드 추가
  const handleAddTempKeyword = (keyword: string) => {
    const cleanedKeyword = keyword.replace(/^#\s*/, ''); // # 제거
    setTempSelectedKeywords((prev) => {
      if (prev.includes(cleanedKeyword)) {
        // 이미 존재하면 제거
        return prev.filter((k) => k !== cleanedKeyword);
      } else {
        // 존재하지 않으면 추가 (최대 5개까지)
        if (prev.length < 5) {
          return [...prev, cleanedKeyword];
        }
        return prev;
      }
    });
  };

  // 저장 버튼 클릭시 실행
  const handleSave = () => {
    if (tempSelectedKeywords.length > 0) {
      selectedKeywords.forEach((keyword) => addKeyword(keyword)); // 기존 키워드 제거
      tempSelectedKeywords.forEach((keyword) => addKeyword(keyword)); // 새 키워드 추가
      onClose();
    }
  };

  // 취소 버튼 클릭
  const handleCancel = () => {
    setTempSelectedKeywords([]); // 임시 배열 초기화
  };

  if (!isOpen) return null;
  return (
    <S.Container>
      <S.ModalContainer>
        <S.Title>
          <S.ModalTitle>키워드 지정</S.ModalTitle>
          <S.CloseIcon onClick={onClose}>
            <img src={CloseIcon} alt='close Icon' />
          </S.CloseIcon>
        </S.Title>
        <S.CategoryBarContainer>
          <CategoryBar
            addKeyword={handleAddTempKeyword}
            selectedKeywords={tempSelectedKeywords}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            onKeywordChange={setTempSelectedKeywords}
          />
        </S.CategoryBarContainer>
        <S.KeywordsBarContainer>
          <SelectedKeywordsBar
            selectedKeywords={tempSelectedKeywords}
            isInModal={true}
          />
        </S.KeywordsBarContainer>
        <S.ButtonContainer>
          <S.CancelButton onClick={handleCancel}>취소</S.CancelButton>
          <S.SaveButton
            onClick={handleSave}
            disabled={tempSelectedKeywords.length === 0}>
            저장
          </S.SaveButton>
        </S.ButtonContainer>
      </S.ModalContainer>
    </S.Container>
  );
};

export default KeywordModal;

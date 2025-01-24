import React, { useState } from 'react';
import * as S from '../../styles/ssulPage/CategoryBarStyle';
import CategorySelector from './CategorySelector';
import Keyword from './Keyword';

const Keywords: Record<string, string[]> = {
  '감정/ 관계': [
    '# 첫사랑',
    '# 우정',
    '# 고백',
    '# 위로',
    '# 신뢰',
    '# 가족',
    '# 이별',
    '# 서운함',
    '# 재회',
    '# 배신',
  ],
  '일상/ 삶': [
    '# 실수',
    '# 행운',
    '# 버스',
    '# 출근',
    '# 일탈',
    '# 고민',
    '# 하루',
    '# 방학',
    '# 추억',
    '# 변화',
  ],
  '취미/ 관심사': [
    '# 영화',
    '# 게임',
    '# 여행',
    '# 음악',
    '# 독서',
    '# 컬렉션',
    '# 드라마',
    '# 요리',
    '# 운동',
    '# 덕질',
  ],
  '상상/ 가상': [
    '# 초능력',
    '# 타임머신',
    '# 로또',
    '# 외계인',
    '# 평행세계',
    '# 동물',
    '# 대통령',
    '# 유령',
    '# 미래',
    '# 꿈',
  ],
  '고민/ 조언': [
    '# 연애',
    '# 진로',
    '# 돈',
    '# 스트레스',
    '# 시험',
    '# 실패',
    '# 취업',
    '# 인간관계',
    '# 성장',
    '# 도전',
  ],
};

interface CategoryBarProps {
  addKeyword: (keyword: string) => void; // 선택된 키워드 추가 함수
  removeKeyword: (keyword: string) => void; // 선택된 키워드 제거 함수
  selectedKeywords: string[]; // 선택된 키워드 리스트
  selectedCategory: string; // 현재 선택된 카테고리
  setSelectedCategory: (category: string) => void; // 카테고리 변경 함수
  onKeywordChange: (keywords: string[]) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({
  selectedCategory,
  setSelectedCategory,
  onKeywordChange,
}) => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]);

  // 키워드 추가 함수
  const addKeyword = (keyword: string) => {
    if (selectedKeywords.length < 5 && !selectedKeywords.includes(keyword)) {
      const updatedKeywords = [...selectedKeywords, keyword.replace('# ', '')];
      setSelectedKeywords(updatedKeywords);
      onKeywordChange(updatedKeywords); // 부모 컴포넌트로 선택된 키워드 전달
    }
  };

  // 키워드 제거 함수
  const removeKeyword = (keyword: string) => {
    const updatedKeywords = selectedKeywords.filter(
      (item) => item !== keyword.replace('# ', '')
    );
    setSelectedKeywords(updatedKeywords);
    onKeywordChange(updatedKeywords); // 부모 컴포넌트로 변경된 키워드 전달
  };

  return (
    <S.Container>
      <S.CategorySelectorContainer>
        <CategorySelector
          selectedCategory={selectedCategory}
          setSelectedCategory={setSelectedCategory}
        />
      </S.CategorySelectorContainer>

      <S.KeywordsList>
        {Keywords[selectedCategory].map((keyword, index) => (
          <Keyword
            key={index}
            keyword={keyword}
            addKeyword={addKeyword}
            removeKeyword={removeKeyword}
            isSelected={selectedKeywords.includes(keyword.replace('# ', ''))}
          />
        ))}
      </S.KeywordsList>
    </S.Container>
  );
};

export default CategoryBar;

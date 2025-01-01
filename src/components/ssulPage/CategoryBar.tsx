import React from 'react';
import * as S from '../../styles/ssulPage/CategoryBarStyle';
import CategorySelector from './CategorySelector';
import Keyword from './Keyword';

const Keywords: Record<string, string[]> = {
  '감정/ 관계': [
    '# 첫사랑',
    '# 우정',
    '# 가족',
    '# 이별',
    '# 고백',
    '# 서운함',
    '# 위로',
    '# 배신',
    '# 신뢰',
    '# 재회',
  ],
  '일상/ 삶': [
    '# 실수',
    '# 행운',
    '# 버스',
    '# 출근',
    '# 일탈',
    '# 방학',
    '# 하루',
    '# 고민',
    '# 변화',
    '# 추억',
  ],
  '취미/ 관심사': [
    '# 영화',
    '# 게임',
    '# 여행',
    '# 음악',
    '# 독서',
    '# 요리',
    '# 드라마',
    '# 덕질',
    '# 운동',
    '# 컬렉션',
  ],
  '상상/ 가상': [
    '# 초능력',
    '# 타임머신',
    '# 로또',
    '# 외계인',
    '# 평행세계',
    '# 유령',
    '# 동물',
    '# 대통령',
    '# 꿈',
    '# 미래',
  ],
  '고민/ 조언': [
    '# 연애',
    '# 진로',
    '# 돈',
    '# 스트레스',
    '# 시험',
    '# 인간관계',
    '# 취업',
    '# 실패',
    '# 도전',
    '# 성장',
  ],
};

interface CategoryBarProps {
  addKeyword: (keyword: string) => void; // 선택된 키워드 추가 함수
  removeKeyword: (keyword: string) => void; // 선택된 키워드 제거 함수
  selectedKeywords: string[]; // 선택된 키워드 리스트
  selectedCategory: string; // 현재 선택된 카테고리
  setSelectedCategory: (category: string) => void; // 카테고리 변경 함수
}

const CategoryBar: React.FC<CategoryBarProps> = ({
  addKeyword,
  removeKeyword,
  selectedKeywords,
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <S.Container>
      <CategorySelector
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />
      <S.KeywordsList>
        {Keywords[selectedCategory].map((keyword, index) => (
          <Keyword
            key={index}
            keyword={keyword}
            addKeyword={addKeyword}
            removeKeyword={removeKeyword}
            isSelected={selectedKeywords.includes(keyword)}
          />
        ))}
      </S.KeywordsList>
    </S.Container>
  );
};

export default CategoryBar;

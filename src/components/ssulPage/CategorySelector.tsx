import React, { useState } from 'react';
import * as S from '../../styles/ssulPage/CategorySelectorStyle';
import DropDownIcon from '../../assets/Icons/KeywordDropdown.svg';
import useNSMediaQuery from '../../hooks/useNSMediaQuery';

interface CategorySelectorProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategorySelector: React.FC<CategorySelectorProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  const Categories = [
    '감정/ 관계',
    '일상/ 삶',
    '취미/ 관심사',
    '상상/ 가상',
    '고민/ 조언',
  ];

  const { isMobile } = useNSMediaQuery();
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev); // 드롭다운 열기/닫기 토글
  const handleSelect = (category: string) => {
    setSelectedCategory(category); // 카테고리 변경 시 상위 상태 초기화
    setIsOpen(false); // 드롭다운 닫기
  };

  return (
    <>
      {isMobile ? (
        <S.MobileCategoryList>
          {Categories.map((category, index) => (
            <S.MobileCategoryItem
              key={index}
              $isSelected={category === selectedCategory}
              onClick={() => handleSelect(category)}>
              {category}
            </S.MobileCategoryItem>
          ))}
        </S.MobileCategoryList>
      ) : (
        <S.Container>
          <S.DropdownHeader onClick={toggleDropdown}>
            {selectedCategory}
            <S.Icon>
              <img src={DropDownIcon} alt='DropDownIcon' />
            </S.Icon>
          </S.DropdownHeader>
          {isOpen && (
            <S.DropdownList>
              {Categories.filter((category) => category !== selectedCategory) // 선택된 카테고리는 제외
                .map((category, index) => (
                  <S.DropdownItem
                    key={index}
                    onClick={() => handleSelect(category)}>
                    {category}
                  </S.DropdownItem>
                ))}
            </S.DropdownList>
          )}
        </S.Container>
      )}
    </>
  );
};

export default CategorySelector;

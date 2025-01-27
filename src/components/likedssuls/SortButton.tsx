import React, { useState } from 'react';
import * as S from '../../styles/likedssuls/SortButtonStyle';
import AsendingIcon from '../../assets/Images/AscendingIcon.svg';
import DesendingIcon from '../../assets/Images/Desc.svg';
import DropdownIcon from '../../assets/Images/DownArrow.svg';
import DropdownOpen from '../../assets/Icons/DropdownOpen.svg';

const sortOptions = {
  // 내가 쓴 게시글 페이지 정렬옵션
  myPosts: [
    {
      id: 1,
      icon: AsendingIcon,
      label: '제목 가나다 오름차순',
      value: 'TITLE_ASC',
    },
    {
      id: 2,
      icon: DesendingIcon,
      label: '제목 가나다 내림차순',
      value: 'DATE_DESC',
    },
    {
      id: 3,
      icon: AsendingIcon,
      label: '최근 게시 날짜순',
      value: 'DATE_DESC',
    },
    {
      id: 4,
      icon: DesendingIcon,
      label: '과거 게시 날짜순',
      value: 'DATE_ASC ',
    },
  ],
  likedSsuls: [
    // 공감한 썰 페이지 정렬 옵션
    {
      id: 1,
      icon: AsendingIcon,
      label: '제목 가나다 오름차순',
      value: 'TITLE_ASC',
    },
    {
      id: 2,
      icon: DesendingIcon,
      label: '제목 가나다 내림차순',
      value: 'TITLE_DESC',
    },
    { id: 3, icon: AsendingIcon, label: '공감 수 오름차순', value: 'LIKE_ASC' },
    {
      id: 4,
      icon: DesendingIcon,
      label: '공감 수 내림차순',
      value: 'LIKE_DESC',
    },
  ],
};

interface SortButtonProps {
  pageType: 'myPosts' | 'likedSsuls';
  onSortChange: (sortValue: string) => void;
}

interface SortOption {
  id: number;
  icon: string;
  label: string;
  value: string;
}

const SortButton: React.FC<SortButtonProps> = ({ pageType, onSortChange }) => {
  const [selectedOption, setSelectedOption] = useState<SortOption>(
    sortOptions[pageType][0]
  );

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectOption = (option: (typeof sortOptions.myPosts)[number]) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSortChange(option.value);
  };

  return (
    <S.Container>
      <S.Button onClick={toggleDropdown}>
        {selectedOption.label}{' '}
        <img src={isOpen ? DropdownOpen : DropdownIcon} alt='Dropdown Icon' />
      </S.Button>
      {isOpen && (
        <S.DropdownContainer>
          {sortOptions[pageType].map((option) => (
            <S.DropdownMenu
              key={option.id}
              onClick={() => handleSelectOption(option)}>
              <img src={option.icon} alt={`${option.label} Icon`} />
              {option.label}
            </S.DropdownMenu>
          ))}
        </S.DropdownContainer>
      )}
    </S.Container>
  );
};

export default SortButton;

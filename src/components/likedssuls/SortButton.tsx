import React, { useState } from 'react';
import * as S from '../../styles/likedssuls/SortButtonStyle';
import AsendingIcon from '../../assets/images/asending icon.svg';
import DesendingIcon from '../../assets/images/descending.svg';
import DropdownIcon from '../../assets/images/dropdown.svg';
import DropdownOpen from '../../assets/Icons/DropdownOpen.svg';

const sortOptions = [
  { id: 1, icon: AsendingIcon, label: '제목 가나다 오름차순' },
  { id: 2, icon: DesendingIcon, label: '제목 가나다 내림차순' },
  { id: 3, icon: AsendingIcon, label: '공감 누른 최근 날짜순' },
  { id: 4, icon: DesendingIcon, label: '공감 누른 과거 날짜순' },
];

const SortButton: React.FC = () => {
  const [selectedOption, setSelectedOption] = useState(sortOptions[2]);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleSelectOption = (option: (typeof sortOptions)[number]) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <S.Container>
      <S.Button onClick={toggleDropdown}>
        {selectedOption.label}{' '}
        <img src={isOpen ? DropdownOpen : DropdownIcon} />
      </S.Button>

      {isOpen && (
        <S.DropdownContainer>
          {sortOptions.map((option) => (
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

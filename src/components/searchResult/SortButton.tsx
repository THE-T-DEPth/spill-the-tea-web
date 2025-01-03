import React, { useState } from "react";
import * as S from "../../styles/searchResult/SortButtonStyle";
import AsendingIcon from "../../assets/images/asending icon.svg";
import DesendingIcon from "../../assets/images/descending.svg";
import DropdownIcon from "../../assets/images/dropdown.svg";

const sortOptions = [
  { id: 1, icon: AsendingIcon, label: "제목 가나다 오름차순" },
  { id: 2, icon: DesendingIcon, label: "제목 가나다 내림차순" },
  { id: 3, icon: AsendingIcon, label: "공감 수 오름차순" },
  { id: 4, icon: DesendingIcon, label: "공감 수 내림차순" },
];

const SortButton: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <S.Container>
      <S.Button onClick={toggleDropdown}>
        정렬하기 <img src={DropdownIcon} />
      </S.Button>

      {isOpen && (
        <S.DropdownContainer>
          {sortOptions.map((option) => (
            <S.DropdownMenu key={option.id}>
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

import React, { useState, useEffect } from 'react';
import LeftArrow from '../../assets/Images/Left.png';
import RightArrow from '../../assets/Images/right.svg';
import LeftArrowDisable from '../../assets/Images/leftdisable.svg';
import RightArrowDisable from '../../assets/Images/rightdisable.svg';
import * as S from '../../styles/searchResult/PaginationStyle';

interface PaginationProps {
  totalPages: number; // totalPage를 직접 전달받음
  currentPage: number;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalPages,
  currentPage,
  onPageChange,
}) => {
  const [pageGroup, setPageGroup] = useState<number[]>([]);

  useEffect(() => {
    const groupIndex = Math.floor((currentPage - 1) / 3);
    const startPage = groupIndex * 3 + 1;
    const endPage = Math.min(startPage + 2, totalPages);
    setPageGroup(
      Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
    );
  }, [currentPage, totalPages]);

  const handlePreviousPage = () => {
    if (currentPage > 1) onPageChange(currentPage - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) onPageChange(currentPage + 1);
  };

  return (
    <S.PaginationContainer>
      <S.PaginationButtonLeft
        $disabled={currentPage === 1}
        onClick={handlePreviousPage}>
        <img
          src={currentPage === 1 ? LeftArrowDisable : LeftArrow}
          alt='Left Arrow'
        />
      </S.PaginationButtonLeft>

      <S.NumberContainer $groupLength={pageGroup.length}>
        {pageGroup.map((page) => (
          <S.PageNumber
            key={page}
            $isActive={currentPage === page}
            onClick={() => onPageChange(page)}>
            {page}
          </S.PageNumber>
        ))}
      </S.NumberContainer>

      <S.PaginationButtonRight
        $disabled={currentPage === totalPages}
        onClick={handleNextPage}>
        <img
          src={currentPage === totalPages ? RightArrowDisable : RightArrow}
          alt='Right Arrow'
        />
      </S.PaginationButtonRight>
    </S.PaginationContainer>
  );
};

export default Pagination;

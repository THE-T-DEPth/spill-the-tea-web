import React, { useState, useEffect } from "react";
import LeftArrow from "../../assets/images/left.svg";
import RightArrow from "../../assets/images/right.svg";
import LeftArrowDisable from "../../assets/images/leftdisable.svg";
import RightArrowDisable from "../../assets/images/rightdisable.svg";
import * as S from "../../styles/searchResult/PaginationStyle";
import { BoxProps } from "../../components/searchResult/Box";

interface PaginationProps {
  totalItems: number;
  itemsPerPage: number;
  items: BoxProps[];
  onPageChange: (pageItems: BoxProps[]) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  totalItems,
  itemsPerPage,
  items,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageGroup, setPageGroup] = useState<number[]>([]);

  useEffect(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const currentItems = items.slice(startIndex, startIndex + itemsPerPage);
    onPageChange(currentItems);

    const groupIndex = Math.floor((currentPage - 1) / 3);
    const startPage = groupIndex * 3 + 1;
    const endPage = Math.min(startPage + 2, totalPages);
    setPageGroup(
      Array.from({ length: endPage - startPage + 1 }, (_, i) => startPage + i)
    );
  }, [currentPage, items, itemsPerPage, totalPages, onPageChange]);

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prev) => prev - 1);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
  };

  return (
    <S.PaginationContainer>
      <S.PaginationButtonLeft
        $disabled={currentPage === 1}
        onClick={handlePreviousPage}
      >
        <img
          src={currentPage === 1 ? LeftArrowDisable : LeftArrow}
          alt="Left Arrow"
        />
      </S.PaginationButtonLeft>

      <S.NumberContainer $groupLength={pageGroup.length}>
        {pageGroup.map((page) => (
          <S.PageNumber
            key={page}
            $isActive={currentPage === page}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </S.PageNumber>
        ))}
      </S.NumberContainer>

      <S.PaginationButtonRight
        $disabled={currentPage === totalPages}
        onClick={handleNextPage}
      >
        <img
          src={currentPage === totalPages ? RightArrowDisable : RightArrow}
          alt="Right Arrow"
        />
      </S.PaginationButtonRight>
    </S.PaginationContainer>
  );
};

export default Pagination;

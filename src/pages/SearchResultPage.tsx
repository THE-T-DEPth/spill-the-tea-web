import React, { useState, useCallback } from 'react';
import SearchBox from '../components/searchResult/Box';
import BoxData from '../assets/data/BoxData';
import * as S from '../styles/searchResult/SearchResultPageStyle';
import SortButton from '../components/searchResult/SortButton';
import Pagination from '../styles/searchResult/Pagination';
import { BoxProps } from '../components/searchResult/Box';
import Header from '../components/layout/Header';
import NavBar from '../components/layout/NavBar';
import Footer from '../components/layout/Footer';
import TopBar from '../components/searchResult/TopBar';
import { useLocation } from 'react-router-dom';

interface SearchResultPageProps {
  searchQuery?: string; // 검색어
}

const SearchResultPage: React.FC<SearchResultPageProps> = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('query') || '검색한 제목';
  const [currentItems, setCurrentItems] = useState(BoxData.slice(0, 15)); // 초기 데이터

  const handlePageChange = useCallback((pageItems: BoxProps[]) => {
    setCurrentItems(pageItems);
  }, []);

  return (
    <>
      <Header />
      <NavBar />
      <TopBar text='"맛별로 골라서 먹어보자🤤"' />
      {BoxData.length === 0 ? (
        <S.EmptyContainer>
          <S.EmptyMessage>
            “{searchQuery}” 에 맞는 차가 품절 됐다고요??😂
          </S.EmptyMessage>
        </S.EmptyContainer>
      ) : (
        <S.Container>
          <S.TitleContainer>
            <S.SearchTitle>
              <span>“{searchQuery}”</span>에 맞는 썰입니다!
            </S.SearchTitle>
            <SortButton />
          </S.TitleContainer>
          <S.GridContainer>
            {currentItems.map((data, index) => (
              <SearchBox
                key={index}
                title={data.title}
                image={data.image}
                keywords={data.keywords}
                date={data.date}
                time={data.time}
                likes={data.likes}
                comments={data.comments}
              />
            ))}
          </S.GridContainer>
          <S.PaginationContainer>
            <Pagination
              totalItems={BoxData.length} // 총 데이터 개수
              itemsPerPage={15} // 페이지당 아이템 개수
              items={BoxData} // 전체 데이터 배열
              onPageChange={handlePageChange} // 페이지 데이터 업데이트
            />
          </S.PaginationContainer>
        </S.Container>
      )}
      <Footer />
    </>
  );
};

export default SearchResultPage;

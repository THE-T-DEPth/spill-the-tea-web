import React, { useState, useEffect } from 'react';
import SearchBox from '../components/searchResult/Box';
import * as S from '../styles/searchResult/SearchResultPageStyle';
import Pagination from '../components/searchResult/Pagination';
import { BoxProps } from '../components/searchResult/Box';
import TopBar from '../components/searchResult/TopBar';
import { useLocation } from 'react-router-dom';
import { getSearchWord } from '../api/searchResult/getSearchWord';

const SearchResultPage: React.FC = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const searchQuery = searchParams.get('query');

  const [posts, setPosts] = useState<BoxProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchSearchResults = async () => {
      if (!searchQuery) return;
      try {
        const response = await getSearchWord(searchQuery, currentPage - 1, 15);
        if (response && response.success) {
          const formattedPosts = response.data.contents.map((post) => ({
            postId: post.postId,
            title: post.title,
            image: post.thumb,
            keywords: post.keywordList
              .replace(/\[|\]/g, '')
              .split(', ')
              .map((keyword) => `# ${keyword.trim()}`),
            date: post.createdDateTime,
            likes: post.likedCount,
            comments: post.commentCount.toString(),
          }));
          setPosts(formattedPosts);
          setTotalPages(response.data.totalPage);
        } else {
          setPosts([]);
        }
      } catch (error) {
        console.error('검색 데이터를 불러오는 중 오류 발생:', error);
      }
    };

    fetchSearchResults();
  }, [searchQuery, currentPage]);

  return (
    <>
      <TopBar text='"맛별로 골라서 먹어보자🤤"' />
      {posts.length === 0 ? (
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
          </S.TitleContainer>
          <S.GridContainer>
            {posts.map((data, index) => (
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
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </S.PaginationContainer>
        </S.Container>
      )}
    </>
  );
};

export default SearchResultPage;

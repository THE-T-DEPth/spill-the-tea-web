import { useState, useCallback, useEffect } from 'react';
import * as S from '../styles/ssulPage/SsulPageStyle';
import CategoryBar from '../components/ssulPage/CategoryBar';
import SelectedKeywordsBar from '../components/ssulPage/SelectedKeywordsBar';
import TopBar from '../components/searchResult/TopBar';
import Box from '../components/searchResult/Box';
import { BoxProps } from '../components/searchResult/Box';
import Pagination from '../components/searchResult/Pagination';
import useNSMediaQuery from '../hooks/useNSMediaQuery';
import KeywordModal from '../components/ssulPage/KeywordModal';
import MakeTeaButton from '../components/Home/MakeTeaButton';
import { getSearchKeyword } from '../api/ssulPage/getSearchKeyword';

const SsulPage = () => {
  const { isMobile } = useNSMediaQuery();
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]); // 선택된 키워드 초기화
  const [selectedCategory, setSelectedCategory] = useState('감정/ 관계'); // 카테고리 변경
  const [posts, setPosts] = useState<BoxProps[]>([]); // API 결과 상태 저장
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // 키워드 추가
  const addKeyword = (keyword: string) => {
    if (selectedKeywords.length < 5 && !selectedKeywords.includes(keyword)) {
      setSelectedKeywords((prev) => [...prev, keyword]);
    }
  };

  // 키워드 제거
  const removeKeyword = (keyword: string) => {
    setSelectedKeywords((prev) => prev.filter((k) => k !== keyword));
  };

  // API 호출
  useEffect(() => {
    if (selectedKeywords.length > 0) {
      fetchPosts(selectedKeywords, currentPage);
    } else {
      setPosts([]);
    }
  }, [selectedKeywords, currentPage]);

  const fetchPosts = async (keywords: string[], page: number) => {
    try {
      const response = await getSearchKeyword(keywords, page - 1, 15);
      if (response && response.success) {
        const formattedPosts: BoxProps[] = response.data.contents.map(
          (post) => ({
            postId: post.postId,
            title: post.title,
            image: post.thumb,
            keywords: post.keywordList
              .replace(/\[|\]/g, '')
              .split(', ')
              .map((kw) => `#${kw.trim()}`),
            date: post.createDate,
            time: post.createTime,
            likes: post.likedCount,
            comments: post.commentCount,
            liked: post.liked,
          })
        );
        setPosts(formattedPosts);
        setTotalPages(response.data.totalPage);
      } else {
        setPosts([]);
        console.error('데이터를 가져오지 못했습니다.');
      }
    } catch (error) {
      console.error('게시글을 불러오는 중 오류 발생:', error);
      setPosts([]);
    }
  };

  // 카테고리 변경
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePageChange = useCallback((page: number) => {
    setCurrentPage(page);
  }, []);

  const handleKeywordButtonClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <TopBar text='"오늘도 썰 한 잔, 짤 한 스푼 🍵" ' />
      <S.Container>
        {isMobile ? (
          <>
            <S.MobileCategoryBar>
              {/* 모달화면 */}
              <S.KeywordContainer>
                <S.Title>선택 키워드</S.Title>
                <S.KeywordButton onClick={handleKeywordButtonClick}>
                  키워드 지정
                </S.KeywordButton>
              </S.KeywordContainer>
              <SelectedKeywordsBar
                selectedKeywords={selectedKeywords}
                isInModal={isModalOpen}
              />
            </S.MobileCategoryBar>
            {isModalOpen && (
              <KeywordModal
                isOpen={isModalOpen}
                onClose={handleCloseModal}
                selectedKeywords={selectedKeywords}
                addKeyword={addKeyword}
                selectedCategory={selectedCategory}
                setSelectedCategory={handleCategoryChange}
              />
            )}
          </>
        ) : (
          <>
            {/* 카테고리 - 해당 키워드 */}
            <CategoryBar
              addKeyword={addKeyword}
              removeKeyword={removeKeyword}
              selectedKeywords={selectedKeywords}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              onKeywordChange={(updatedKeywords) =>
                setSelectedKeywords(updatedKeywords)
              }
            />
            {/* 선택된 키워드 */}
            <SelectedKeywordsBar
              selectedKeywords={selectedKeywords}
              isInModal={false}
            />
          </>
        )}
        {selectedKeywords.length === 0 ? (
          <S.EmptyContainer>
            <S.EmptyMessage>
              키워드를 선택하여 메뉴판을 둘러보세요
            </S.EmptyMessage>
          </S.EmptyContainer>
        ) : (
          <S.BoxContainer>
            <S.GridContainer>
              {posts.map((data) => (
                <Box
                  key={data.postId}
                  postId={data.postId}
                  title={data.title}
                  image={data.image}
                  keywords={data.keywords}
                  date={data.date}
                  time={data.time}
                  likes={data.likes}
                  comments={data.comments}
                  liked={data.liked}
                />
              ))}
            </S.GridContainer>
            <S.PaginationContainer>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                onPageChange={handlePageChange}
              />
            </S.PaginationContainer>
          </S.BoxContainer>
        )}
        <S.MakeTeaButtonContainer>
          <MakeTeaButton />
        </S.MakeTeaButtonContainer>
      </S.Container>
    </>
  );
};

export default SsulPage;

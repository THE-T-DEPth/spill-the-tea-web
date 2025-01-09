import { useState, useCallback } from 'react';
import * as S from '../styles/ssulPage/SsulPageStyle';
import CategoryBar from '../components/ssulPage/CategoryBar';
import SelectedKeywordsBar from '../components/ssulPage/SelectedKeywordsBar';
import TopBar from '../components/searchResult/TopBar';
import Box from '../components/searchResult/Box';
import BoxData from '../assets/data/SsulPagedata';
import { BoxProps } from '../components/searchResult/Box';
import Pagination from '../styles/searchResult/Pagination';

const SsulPage = () => {
  const [selectedKeywords, setSelectedKeywords] = useState<string[]>([]); // 선택된 키워드 초기화
  const [selectedCategory, setSelectedCategory] = useState('감정/ 관계'); // 카테고리 변경
  const [currentItems, setCurrentItems] = useState(BoxData.slice(0, 15));

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

  // 카테고리 변경
  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
  };

  const handlePageChange = useCallback((pageItems: BoxProps[]) => {
    setCurrentItems(pageItems);
  }, []);

  return (
    <>
      <TopBar text='"오늘도 썰 한 잔, 짤 한 스푼 🍵" ' />
      <S.Container>
        {/* 카테고리 - 해당 키워드 */}
        <CategoryBar
          addKeyword={addKeyword}
          removeKeyword={removeKeyword}
          selectedKeywords={selectedKeywords}
          selectedCategory={selectedCategory}
          setSelectedCategory={handleCategoryChange}
        />
        {/* 선택된 키워드 */}
        <SelectedKeywordsBar selectedKeywords={selectedKeywords} />
        {selectedKeywords.length === 0 ? (
          <S.EmptyContainer>
            <S.EmptyMessage>
              키워드를 선택하여 메뉴판을 둘러보세요
            </S.EmptyMessage>
          </S.EmptyContainer>
        ) : (
          <S.BoxContainer>
            <S.GridContainer>
              {currentItems.map((data, index) => (
                <Box
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
                totalItems={BoxData.length}
                itemsPerPage={15}
                items={BoxData}
                onPageChange={handlePageChange}
              />
            </S.PaginationContainer>
          </S.BoxContainer>
        )}
      </S.Container>
    </>
  );
};

export default SsulPage;

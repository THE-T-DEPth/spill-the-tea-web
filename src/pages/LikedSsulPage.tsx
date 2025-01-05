import { useCallback, useState } from 'react';
import * as S from '../styles/likedssuls/LikedSsulPageStyle';
import TopBar from '../components/searchResult/TopBar';
import SortButton from '../components/searchResult/SortButton';
import Box from '../components/searchResult/Box';
import BoxData from '../assets/data/BoxData';
import { BoxProps } from '../components/searchResult/Box';
import Pagination from '../styles/searchResult/Pagination';

const LikedSsulPage = () => {
  const [currentItems, setCurrentItems] = useState(BoxData.slice(0, 15)); // 초기 데이터

  const handlePageChange = useCallback((pageItems: BoxProps[]) => {
    setCurrentItems(pageItems);
  }, []);

  return (
    <>
      <TopBar text='"내가 공감을 누른 티 컬렉션🍵"' />
      {BoxData.length === 0 ? (
        <S.EmptyContainer>
          <S.EmptyMessage>아직은 공감을 누른 티가 없어요!</S.EmptyMessage>
        </S.EmptyContainer>
      ) : (
        <S.Container>
          <SortButton />
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
        </S.Container>
      )}
    </>
  );
};

export default LikedSsulPage;

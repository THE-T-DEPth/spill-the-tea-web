import { useState, useCallback } from 'react';
import * as S from '../../styles/myPage/MyPostsStyle';
import Box from '../searchResult/Box';
import BoxData from '../../assets/data/BoxData';
import { BoxProps } from '../../components/searchResult/Box';
import SortButton from '../likedssuls/SortButton';
import Pagination from '../../components/searchResult/Pagination';
import useNSMediaQuery from '../../hooks/useNSMediaQuery';

const MyPosts = () => {
  const { isMobile } = useNSMediaQuery();
  const [currentItems, setCurrentItems] = useState(BoxData.slice(0, 15));
  const handlePageChange = useCallback((pageItems: BoxProps[]) => {
    setCurrentItems(pageItems);
  }, []);

  return (
    <>
      {BoxData.length === 0 ? (
        <S.EmptyContainer>
          {isMobile ? (
            <S.EmptyMessageMini>
              따끈따끈한 티를 작성해보세요.
            </S.EmptyMessageMini>
          ) : (
            <S.EmptyMessage>스필터디에서 썰을 풀어보세요!😂</S.EmptyMessage>
          )}
        </S.EmptyContainer>
      ) : (
        <S.Container>
          <S.SortButtonContainer>
            <SortButton />
          </S.SortButtonContainer>
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

export default MyPosts;

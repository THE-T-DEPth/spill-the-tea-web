import { useState, useEffect } from 'react';
import TopBar from '../components/Home/TopBar';
import MainInputBox from '../components/Home/MainInputBox';
import MakeTeaButton from '../components/Home/MakeTeaButton';
import { fetchLikedPosts, fetchLatestPosts } from '../api/home/box';
import { BoxProps } from '../components/Home/Box';
import * as S from '../styles/Home/HomPageComponentStyle';

const HomePage = () => {
  const [likedData, setLikedData] = useState<BoxProps[]>([]);
  const [latestData, setLatestData] = useState<BoxProps[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const likedPosts = await fetchLikedPosts();
        const latestPosts = await fetchLatestPosts();
        setLikedData(likedPosts);
        setLatestData(latestPosts);
      } catch (error) {
        console.error('데이터를 가져오는 중 오류 발생:', error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  if (isLoading) {
    return <div>로딩 중...</div>;
  }

  return (
    <>
      <TopBar text='"오늘도 썰 한 잔, 짤 한 스푼 🍵"' />
      <S.Wrapper>
        <S.HomeDiv>
          <MainInputBox
            text='터지는 순 🔥'
            boxData={likedData}
            emptyText='현재는 터지는 티가 없네요,,,'
          />
        </S.HomeDiv>
        <S.HomeDiv2>
          <MainInputBox
            text='갓 나온 따끈따끈 🍵'
            boxData={latestData}
            emptyText='아직은 따끈따끈한 티가 없네요,,,'
          />
          <S.MakeTeaButtonContainer>
            <MakeTeaButton />
          </S.MakeTeaButtonContainer>
        </S.HomeDiv2>
      </S.Wrapper>
    </>
  );
};

export default HomePage;

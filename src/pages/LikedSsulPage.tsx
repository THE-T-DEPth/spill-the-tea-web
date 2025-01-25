import { useEffect, useState } from 'react';
import * as S from '../styles/likedssuls/LikedSsulPageStyle';
import TopBar from '../components/searchResult/TopBar';
import SortButton from '../components/likedssuls/SortButton';
import Box from '../components/searchResult/Box';
import { BoxProps } from '../components/searchResult/Box';
import Pagination from '../components/searchResult/Pagination';
import { getMyLikedPosts } from '../api/likedSsuls/getMyLIkedPosts';
import MakeTeaButton from '../components/Home/MakeTeaButton';

const LikedSsulPage = () => {
  const [posts, setPosts] = useState<BoxProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('DATE_DESC');
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getMyLikedPosts(currentPage - 1, 15, sortBy);
        if (response && response.success) {
          const formattedPosts = response.data.contents.map((post) => ({
            postId: post.postId,
            title: post.title,
            image: post.thumbUrl,
            keywords: post.keywordList
              .replace(/\[|\]/g, '')
              .split(', ')
              .map((keyword) => `# ${keyword.trim()}`),
            date: post.createDate,
            time: post.createTime,
            likes: post.likedCount,
            comments: post.commentCount,
          }));
          setPosts(formattedPosts);
          setTotalPages(response.data.totalPage);
        }
      } catch (error) {
        console.error(
          '좋아요 한 게시글 데이터를 불러오는 중 오류 발생:',
          error
        );
      }
    };
    fetchPosts();
  }, [currentPage, sortBy]);

  const handleSortChange = (selectedSort: string) => {
    setSortBy(selectedSort);
    setCurrentPage(1);
  };

  return (
    <>
      <TopBar text='"내가 공감을 누른 티 컬렉션🍵"' />
      {posts.length === 0 ? (
        <S.EmptyContainer>
          <S.EmptyMessage>아직은 공감을 누른 티가 없어요!</S.EmptyMessage>
        </S.EmptyContainer>
      ) : (
        <S.Container>
          <S.MainContainer>
            <S.SortButtonContainer>
              <SortButton
                pageType='likedSsuls'
                onSortChange={handleSortChange}
              />
            </S.SortButtonContainer>
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
                />
              ))}
            </S.GridContainer>
          </S.MainContainer>
          <S.PaginationContainer>
            <Pagination
              totalPages={totalPages}
              currentPage={currentPage}
              onPageChange={setCurrentPage}
            />
          </S.PaginationContainer>
          <S.MakeTeaButtonContainer>
            <MakeTeaButton />
          </S.MakeTeaButtonContainer>
        </S.Container>
      )}
    </>
  );
};

export default LikedSsulPage;

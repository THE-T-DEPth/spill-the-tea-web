import { useState, useEffect } from 'react';
import * as S from '../../styles/myPage/MyPostsStyle';
import Box from '../searchResult/Box';
import { BoxProps } from '../../components/searchResult/Box';
import SortButton from '../likedssuls/SortButton';
import Pagination from '../../components/searchResult/Pagination';
import { getMyPosts } from '../../api/myPage/getMyPosts';
import useNSMediaQuery from '../../hooks/useNSMediaQuery';

const MyPosts = () => {
  const { isMobile } = useNSMediaQuery();
  const [posts, setPosts] = useState<BoxProps[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [sortBy, setSortBy] = useState('DATE_DESC');
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getMyPosts(currentPage - 1, 15, sortBy);
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
            comments: post.commentCount,
          }));
          setPosts(formattedPosts);
          setTotalPages(response.data.totalPage);
        }
      } catch (error) {
        console.error('게시글 데이터를 불러오는 중 오류 발생:', error);
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
      {posts.length === 0 ? (
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
            <SortButton pageType='myPosts' onSortChange={handleSortChange} />
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

export default MyPosts;

import { useState, useCallback, useEffect } from 'react';
import * as S from '../../styles/myPage/MyPostsStyle';
import Box from '../searchResult/Box';
import { BoxProps } from '../../components/searchResult/Box';
import SortButton from '../likedssuls/SortButton';
import Pagination from '../../components/searchResult/Pagination';
import { getMyPosts } from '../../api/myPage/getMyPosts';

const MyPosts = () => {
  const [posts, setPosts] = useState<BoxProps[]>([]);
  const [currentItems, setCurrentItems] = useState<BoxProps[]>([]);
  const [sortBy, setSortBy] = useState('DATE_DESC');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await getMyPosts(0, 15, sortBy);
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
        }
      } catch (error) {
        console.error('게시글 데이터를 불러오는 중 오류 발생:', error);
      }
    };
    fetchPosts();
  }, [sortBy]);

  const handlePageChange = useCallback((pageItems: BoxProps[]) => {
    setCurrentItems(pageItems);
  }, []);

  return (
    <>
      {posts.length === 0 ? (
        <S.EmptyContainer>
          <S.EmptyMessage>스필터디에서 썰을 풀어보세요!😂</S.EmptyMessage>
        </S.EmptyContainer>
      ) : (
        <S.Container>
          <S.SortButtonContainer>
            <SortButton pageType='myPosts' onSortChange={setSortBy} />
          </S.SortButtonContainer>
          <S.GridContainer>
            {currentItems.map((data) => (
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
              totalItems={posts.length}
              itemsPerPage={15}
              items={posts}
              onPageChange={handlePageChange}
            />
          </S.PaginationContainer>
        </S.Container>
      )}
    </>
  );
};

export default MyPosts;

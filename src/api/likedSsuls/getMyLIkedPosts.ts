import { api } from '../index';

interface LikedPost {
  postId: number;
  title: string;
  thumb: string;
  likedCount: number;
  commentCount: number;
  keywordList: string;
  createdDateTime: string;
}

interface GetMyLikedPostsResponse {
  success: boolean;
  data: {
    totalPage: number;
    pageSize: number;
    totalElements: number;
    contents: LikedPost[];
  };
}

// 내가 좋아요 누른 게시글 조회 API 요청 함수
export async function getMyLikedPosts(
  page = 0,
  size = 15,
  sortBy = 'DATE_DESC'
): Promise<GetMyLikedPostsResponse | null> {
  try {
    const response = await api.get<GetMyLikedPostsResponse>(
      '/post/my-liked-posts',
      {
        params: { page, size, sortBy },
      }
    );
    return response.data;
  } catch (error) {
    console.error('좋아요 한 게시글 데이터를 가져오는 중 오류 발생:', error);
    return null;
  }
}

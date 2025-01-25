import { api } from '../index';

interface Post {
  postId: number;
  title: string;
  thumbUrl: string;
  likedCount: number;
  commentCount: number;
  keywordList: string;
  createDate: string;
  createTime: string;
  liked: boolean;
}

interface GetMyPostsResponse {
  success: boolean;
  data: {
    totalPage: number;
    pageSize: number;
    totalElements: number;
    contents: Post[];
  };
}

// 내가 쓴 게시글 조회 API 요청 함수
export async function getMyPosts(
  page = 0,
  size = 15,
  sortBy = 'DATE_DESC'
): Promise<GetMyPostsResponse | null> {
  try {
    const response = await api.get<GetMyPostsResponse>('/post/my-post', {
      params: { page, size, sortBy },
    });
    return response.data;
  } catch (error) {
    console.error('게시글 데이터를 가져오는 중 오류 발생:', error);
    return null;
  }
}

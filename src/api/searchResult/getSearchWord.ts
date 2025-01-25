import { api } from '..';

interface SearchPost {
  postId: number;
  title: string;
  thumbUrl: string;
  likedCount: number;
  commentCount: number;
  keywordList: string;
  createDate: string;
  createTime: string;
}

interface SearchPostsResponse {
  success: boolean;
  data: {
    totalPage: number;
    pageSize: number;
    totalElements: number;
    contents: SearchPost[];
  };
}

// 검색 API 요청 함수
export async function getSearchWord(
  word: string,
  page = 0,
  size = 15
): Promise<SearchPostsResponse | null> {
  try {
    const response = await api.get<SearchPostsResponse>(`/post/search/word`, {
      params: { page, size, word },
    });
    return response.data;
  } catch (error) {
    console.error('검색 데이터를 가져오는 중 오류 발생:', error);
    return null;
  }
}

import { api } from '..';

interface SearchPost {
  postId: number;
  title: string;
  thumb: string;
  likedCount: number;
  commentCount: number;
  keywordList: string;
  createdDateTime: string;
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

// 키워드 검색 API 요청 함수
export async function getSearchKeyword(
  keywords: string[],
  page = 0,
  size = 15
): Promise<SearchPostsResponse | null> {
  try {
    const limitedKeywords = keywords.slice(0, 5).join(','); // 최대 5개 키워드 조합
    console.log('API 요청:', { page, size, keywords: limitedKeywords });
    const response = await api.get<SearchPostsResponse>(
      '/post/search/keywords',
      {
        params: { page, size, keywords: limitedKeywords },
      }
    );
    console.log('검색 API 요청 시작:', {
      page,
      size,
      keywords: limitedKeywords,
    });
    return response.data;
  } catch (error) {
    console.error('키워드 검색 데이터를 가져오는 중 오류 발생:', error);
    return null;
  }
}

import axios from "axios";

export const imgApi = axios.create({
  baseURL: "/v1",
  timeout: 2000,
});

export async function getSearch(text: string) {
  try {
    const response = await imgApi.get(`/v1/search/image`, {
      params: { query: text, display: 20 },
      headers: {
        "X-Naver-Client-Id": "IMJXIOivV98srDI_1eQX",
        "X-Naver-Client-Secret": "4T1IUCzm6I",
      },
    });

    // XML 데이터를 파싱
    // const parsedResult = await parseStringPromise(response.data);
    // const items = parsedResult.rss.channel[0].item;

    // // item 배열에서 link 추출
    // const links = items.map((item: any) => item.link[0]);
    return response.data.items; // 링크 배열 반환
  } catch (error) {
    console.error("이미지 검색 중 에러 발생:", error);
    throw error;
  }
}

export async function getGIFs(searchQuery: string) {
  try {
    const API_KEY = "biS5i7ExzYuBl3RJKtfPd0kd46OHUVSe";
    const response = await axios.get(
      `https://api.giphy.com/v1/gifs/search?q=${searchQuery}&api_key=${API_KEY}&limit=10`
    );
    return response.data.data;
  } catch (error) {
    console.log("getGIF 중 에러 발생", error);
    throw error;
  }
}

import { api } from "../index";
import { BoxProps } from "../../components/Home/Box";

// API 응답 데이터 인터페이스
type ApiResponseData = {
	postId: number;
	title: string;
	thumbUrl: string;
	likedCount: number;
	commentCount: number;
	keywordList: string;
	createDate: string;
	createTime: string;
};

// BoxProps 인터페이스와 매핑 함수
const mapApiResponseToBoxProps = (data: ApiResponseData): BoxProps => {
	return {
		title: data.title,
		image: data.thumbUrl,
		keywords: JSON.parse(data.keywordList),
		date: data.createDate,
		time: data.createTime,
		likes: data.likedCount,
		comments: String(data.commentCount),
	};
};

// 공감순 데이터 가져오기
export const fetchLikedPosts = async (): Promise<BoxProps[]> => {
	try {
		const response = await api.get("/posts", {
			params: {
				sortBy: "liked",
			},
		});
		return response.data.map(mapApiResponseToBoxProps);
	} catch (error) {
		console.error("fetchLikedPosts 중 오류 발생:", error);
		throw error;
	}
};

// 최신순 데이터 가져오기
export const fetchLatestPosts = async (): Promise<BoxProps[]> => {
	try {
		const response = await api.get("/posts", {
			params: {
				sortBy: "latest",
			},
		});
		return response.data.map(mapApiResponseToBoxProps);
	} catch (error) {
		console.error("fetchLatestPosts 중 오류 발생:", error);
		throw error;
	}
};


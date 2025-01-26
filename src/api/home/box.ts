import { api } from "../index";
import { BoxProps } from "../../components/Home/Box";


type ApiResponseData = {
	postId: number;
	title: string;
	thumbUrl: string;
	likedCount: number;
	commentCount: number;
	keywordList: string;
	createDate: string;
	createTime: string;
	liked: boolean;

};

const mapApiResponseToBoxProps = (data: ApiResponseData): BoxProps => {
	let parsedKeywords: string[] = [];

	try {
		parsedKeywords = JSON.parse(data.keywordList);
	} catch (error) {
		parsedKeywords = data.keywordList
			.replace(/[\[\]"]/g, "")
			.split(",")
			.map((keyword) => keyword.trim());
	}

	return {
		postId: data.postId,
		title: data.title,
		image: data.thumbUrl,
		keywords: parsedKeywords,
		date: data.createDate,
		likes: data.likedCount,
		comments: String(data.commentCount),
		liked: data.liked,
	};
};



export const fetchLikedPosts = async (): Promise<BoxProps[]> => {
	try {
		const response = await api.get("/post", {
			params: { sortBy: "liked" },

		});
		return response.data.data.map(mapApiResponseToBoxProps);
	} catch (error) {
		console.error("fetchLikedPosts 중 오류 발생:", error);
		throw error;
	}
};


export const fetchLatestPosts = async (): Promise<BoxProps[]> => {
	try {
		const response = await api.get("/post", {
			params: { sortBy: "latest" },

		});
		return response.data.data.map(mapApiResponseToBoxProps);
	} catch (error) {
		console.error("fetchLatestPosts 중 오류 발생:", error);
		throw error;
	}
};

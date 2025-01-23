import { api } from "..";

export async function getPostDetail(postId: number) {
  try {
    // URL을 직접 사용하여 요청
    const response = await api.get(`/post/${postId}`);
    return response.data;
  } catch (error) {
    console.error("API 호출 중 오류 발생:", error);
    throw error;
  }
}

export async function postLike(postId: number) {
  try {
    await api.post(`/post/liked/${postId}`);
  } catch (error) {
    console.log("postLike 중 오류 발생", error);
    throw error;
  }
}

export async function DeleteLike(postId: number) {
  try {
    await api.delete(`/post/liked/${postId}`);
  } catch (error) {
    console.log("deleteLike 중 오류 발생", error);
    throw error;
  }
}

export async function getLike() {
  try {
    const response = await api.get(`/post/my-liked-post`);
    return response.data;
  } catch (error) {
    console.log("getLike 중 오류 발생", error);
    throw error;
  }
}

export async function getMyPost() {
  try {
    const response = await api.get(`/post/my-post`);
    return response.data;
  } catch (error) {
    console.log("getMyPost 중 오류 발생", error);
    throw error;
  }
}

export async function deleteMyPost(postId: number) {
  try {
    await api.delete(`/post/${postId}`);
  } catch (error) {
    console.log("deleteMyPost 중 오류 발생", error);
    throw error;
  }
}

export async function postPostReport(postId: number) {
  try {
    await api.post(`/reports/post/${postId}`);
  } catch (error) {
    console.log("postPostReport 중 오류 발생", error);
  }
}

export async function postBlock(email: string) {
  try {
    await api.post(`/blocks/blocked`, { email: email });
  } catch (error) {
    console.log("postBlock 중 오류 발생", error);
  }
}

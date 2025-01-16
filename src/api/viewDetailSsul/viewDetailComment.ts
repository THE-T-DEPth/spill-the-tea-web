import { api } from '..';

export async function getComment(postId: number) {
  try {
    const response = await api.get(`/comments/posts/${postId}`);
    return response.data;
  } catch (error) {
    console.log('getComment 중 오류 발생', error);
    throw error;
  }
}

export async function postComment(
  postId: number,
  content: string,
  parentCommentId?: number
) {
  try {
    if (parentCommentId) {
      await api.post(`/comments`, {
        parentCommentId: parentCommentId,
        postId: postId,
        content: content,
      });
    } else {
      await api.post(`/comments`, { postId: postId, content: content });
    }
  } catch (error) {
    console.error('postComment 중 오류 발생', error);
  }
}

export async function postCommentLike(commentId: number) {
  try {
    await api.post(`/comments/liked/${commentId}`);
  } catch (error) {
    console.log('postCommentLike 중 오류 발생', error);
    throw error;
  }
}

export async function postReports(commentId: number) {
  try {
    await api.post(`reports/comment/${commentId}`);
  } catch (error) {
    console.log('postReports 중 오류 발생', error);
    throw error;
  }
}

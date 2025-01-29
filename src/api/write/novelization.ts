import { api } from '..';

export async function postNovelization(content: string) {
  try {
    const response = await api.post(`/gpt/novelization`, { content });
    return response.data;
  } catch (error) {
    throw error;
  }
}

import { api } from '..';

export async function postWrite(
  title: string,
  content: string,
  thumbUrl: string | null,
  keyword: string[],
  voice_type: string
) {
  try {
    const response = await api.post(`post`, {
      title,
      content,
      thumbUrl,
      keyword,
      voice_type,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
}

export async function putWrite(
  postId: number,
  title: string,
  content: string,
  keyword: string[],
  voice_type: string,
  thumbUrl: string | null
) {
  // const formData = new FormData();

  // formData.append(
  //   'postReq',
  //   new Blob(
  //     [
  //       JSON.stringify({
  //         title,
  //         content,
  //         keyword,
  //         voice_type,
  //       }),
  //     ],
  //     {
  //       type: 'application/json',
  //     }
  //   )
  // );
  // if (image) formData.append('image', image);

  try {
    const response = await api.put(
      `/post/${postId}`,
      { title, content, thumbUrl, keyword, voice_type }
      //   {
      //   headers: {
      //     'Content-Type': 'multipart/form-data',
      //     // charset: "utf-8",
      //   },
      // }
    );
    console.log(response);
    // console.log('ddddd', title, content, keyword, voice_type, image);
  } catch (error) {
    console.log('putWrite 중 에러 발생', error);
    throw error;
  }
}

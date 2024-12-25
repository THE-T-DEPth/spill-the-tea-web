import React from "react";
import * as S from "../../styles/searchResult/MainBoxStyle";
import Vector from "../../assets/images/time.svg";
import Like from "../../assets/images/like.svg";
import Comment from "../../assets/images/comment.svg";

type Keyword = string;

export interface BoxProps {
  title: string; //글 제목
  image: string; //이미지 URL
  keywords: Keyword[]; // 키워드 목록
  date: string; // 작성 날짜
  time?: string; // 작성 시간(없어도됨)
  likes: number; //공감 수
  comments: string; //댓글 수
}

const Box: React.FC<BoxProps> = ({
  title,
  image,
  keywords,
  date,
  time,
  likes,
  comments,
}) => {
  const truncatedTitle = title.length > 13 ? `${title.slice(0, 13)}...` : title;
  return (
    <S.Container>
      <S.Title>{truncatedTitle}</S.Title>
      <S.ImageContainer>
        <S.Image src={image} />
      </S.ImageContainer>
      <S.Keywords>
        {keywords.map((keyword, index) => (
          <S.Keyword key={index}>{keyword}</S.Keyword>
        ))}
      </S.Keywords>
      <S.InfoContainer>
        <S.LikeContainer>
          <S.Likes>
            <img src={Like} alt="like Icon" className="Icon" />
            {likes}
          </S.Likes>
          <S.Comments>
            <img src={Comment} alt="comment Icon" className="Icon" />
            {comments}
          </S.Comments>
        </S.LikeContainer>
        <S.TimeContainer>
          <img src={Vector} alt="clock Icon" className="Icon" />
          {date} {time && ` / ${time}`}
        </S.TimeContainer>
      </S.InfoContainer>
    </S.Container>
  );
};

export default Box;

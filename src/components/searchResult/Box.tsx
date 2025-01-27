import React from 'react';
import * as S from '../../styles/searchResult/BoxStyle';
import Vector from '../../assets/Images/Clock.png';
import DisableClock from '../../assets/Icons/DisableClock.svg';
import Like from '../../assets/Images/like.svg';
import Comment from '../../assets/Images/comment.svg';
import DisableComment from '../../assets/Icons/DisableComment.svg';
import { useNavigate } from 'react-router-dom';
import emptyLike from '../../assets/Images/emptyLike.svg';

type Keyword = string;

export interface BoxProps {
  postId: number;
  title: string; // 글 제목
  image: string; // 이미지 URL
  keywords: Keyword[]; // 키워드 목록
  date: string; // 작성 날짜
  time?: string; // 작성 시간(없어도 됨)
  likes: number; // 공감 수
  comments: number; // 댓글 수
  liked: boolean; // 좋아요 상태
  disabled?: boolean; // 활성화 안될 시
  textLength?: number;
}

const Box: React.FC<BoxProps> = ({
  postId,
  title,
  image,
  keywords,
  date,
  time,
  likes,
  comments,
  liked,
  disabled,
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (!disabled) {
      navigate(`/viewDetailSsul/${postId}`);
    }
  };

  const truncatedTitle = title.length > 13 ? `${title.slice(0, 13)}...` : title;
  return (
    <S.Container disabled={disabled} onClick={handleClick}>
      <S.Title disabled={disabled}>{truncatedTitle}</S.Title>
      <S.ImageContainer disabled={disabled}>
        <S.Image src={image} disabled={disabled} />
      </S.ImageContainer>
      <S.Keywords>
        {keywords.map((keyword, index) => (
          <S.Keyword
            key={index}
            disabled={disabled}
            $textLength={keyword.length}>
            {keyword}
          </S.Keyword>
        ))}
      </S.Keywords>
      <S.InfoContainer disabled={disabled}>
        <S.LikeContainer disabled={disabled}>
          <S.Likes disabled={disabled}>
            <img
              src={liked ? Like : emptyLike}
              alt='like Icon'
              className='Icon'
            />
            {likes}
          </S.Likes>
          <S.Comments disabled={disabled}>
            <img
              src={disabled ? DisableComment : Comment}
              alt='comment Icon'
              className='Icon'
            />
            {comments}
          </S.Comments>
        </S.LikeContainer>
        <S.TimeContainer disabled={disabled}>
          <img
            src={disabled ? DisableClock : Vector}
            alt='clock Icon'
            className='Icon'
          />
          {date} {time && ` / ${time}`}
        </S.TimeContainer>
      </S.InfoContainer>
    </S.Container>
  );
};

export default Box;

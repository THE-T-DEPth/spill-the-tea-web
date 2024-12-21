import styled from "styled-components";

export const Title = styled.div`
  width: 100%;
  height: 27px;
  background: var(--Main1);
  font: var(--boxTitle);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 190px;
  height: 253px;

  background: #ffffff;
  border: 0.75px solid var(--Secondary2);
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    /* 컨테이너에 호버 시 효과 */
    box-shadow: 0px 4px 17px rgba(38, 130, 42, 0.25);
  }

  &:hover ${Title} {
    /* 컨테이너에 호버 시 Title의 배경색 변경 */
    background-color: var(--Main3);
  }
`;

export const ImageContainer = styled.div`
  width: 140px;
  height: 140px;
  background: #dbdbdb;
  overflow: hidden;
  margin-top: 8px;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: pointer;
`;

export const Keywords = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 13px;
  margin: 8px 0 10px;
`;

export const Keyword = styled.span`
  padding: 3.5px 6px;
  height: 17px;
  font: var(--boxInfo);
  color: var(--primary1);
  background-color: ;
  border-radius: 28px;
  border: 0.6px solid transparent;
  box-sizing: border-box;

  background-image: linear-gradient(var(--Yellow), var(--Yellow)),
    linear-gradient(141.28deg, #fffdee 12.77%, #dec181 57.01%);
  background-origin: border-box;
  background-clip: padding-box, border-box;
`;

export const InfoContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 43px;
  padding-left: 19px;
  font: var(--boxInfo);
  color: var(--primary1);
`;

export const LikeContainer = styled.div`
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
`;

export const Likes = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const Comments = styled.span`
  display: flex;
  align-items: center;
  gap: 4px;
`;

export const TimeContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

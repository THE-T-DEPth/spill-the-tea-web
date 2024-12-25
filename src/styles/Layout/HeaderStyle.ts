import styled from "styled-components";
import BackgroundImage from "../../assets/Images/BackGround.svg";

export const Container = styled.header`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 80px; 
  overflow: hidden;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url(${BackgroundImage});
  background-size: cover;
  background-position: center;
  z-index: 1;
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  margin-left: 542px;
  margin-right: 542px;
  z-index: 2; /* 배경 위로 표시 */
`;

export const IconWrapper = styled.div`
  img {
    height: 37px;
	width: 35px;
    margin-right: 17px;
  }
`;

export const Title = styled.h1`
  font-size: 18px;
  font-weight: bold;
  margin-top: 21px;
  color: var(--Sub1);
  font: var(--headerXL);
`;


import styled from "styled-components";
import { isMobile } from "../../hooks/Media";

export const Container = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--Main2);
  height: 75.09px;
  padding: 20px 0;
  box-sizing: border-box;
  transition: all 0.3s ease-in-out;
  ${isMobile} {
    height: 126px;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 7px;
`;

export const LogoWrapper = styled.div`
  img {
    width: 158px;
    height: 10px;
    margin-top: 17.09px;
	${isMobile}{
	width: 50px;
	height: 15.8px;
	margin-top:21px;
	margin-bottom: 8px;
  }
  }
`;

export const Text = styled.p`
  font: var(--footerMini);
  color: var(--Black);
  margin: 0;
  ${isMobile}{
	font: var(--footerText);
	margin-bottom: 12.21px;
  }
`;

export const Icons = styled.div`
  display: flex;
  justify-content: center;
  gap: 44.48px;
  margin-top: 0px;
  margin-bottom: 10.52px;
  ${isMobile} {
     gap: 44px;
	 margin-bottom: 24.17px;
    }
`;

export const IconWrapper = styled.div`
  img {
    width: 11.48px;
    height: 11.48px;
	${isMobile} {
      width: 18.18px; 
      height: 18.18px;
    }

    &:hover {
      opacity: 0.7;
    }
  }
`;

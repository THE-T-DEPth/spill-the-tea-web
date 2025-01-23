import styled from "styled-components";
import { isMobile } from "../../hooks/Media";


export const Wrapper = styled.div`
display:flex;
flex-direction: column;

`;

export const HomeDiv = styled.div`
  margin-top: 74px;
  transition: all 0.3s ease-in-out;
  ${isMobile}{
	margin-top: 0px;
  }
`;

export const HomeDiv2 = styled.div`
  margin-top: 100px;
  margin-bottom: 136px;
  position: relative; 
  transition: all 0.3s ease-in-out;
  ${isMobile} {
	margin-top: -80px;
	margin-bottom: 60.43px;
	}

`;

export const MakeTeaButtonContainer = styled.div`
  position: absolute;
  bottom: -60px;
  right: calc((100% - 1440px) / 2 + 55px); 
  z-index: 10;
  transition: all 0.3s ease-in-out;
   ${isMobile} {
	  display: none; 
	}

  @media (max-width: 1440px) {
    right: 55px; 
  }
`;


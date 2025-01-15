import styled from "styled-components";

export const Wrapper = styled.div`
display:flex;
flex-direction: column;
`;

export const HomeDiv = styled.div`
  margin-top: 74px;
`;

export const HomeDiv2 = styled.div`
  margin-top: 100px;
  margin-bottom: 136px;
  position: relative; 
`;

export const MakeTeaButtonContainer = styled.div`
  position: absolute;
  bottom: -60px;
  right: calc((100% - 1440px) / 2 + 55px); 
  z-index: 10;

  @media (max-width: 1440px) {
    right: 55px; 
  }
`;


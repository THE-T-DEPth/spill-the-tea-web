import styled from "styled-components";

export const HomeDiv = styled.div`
  margin-top: 74px;
`;

export const HomeDiv2 = styled.div`
  margin-top: 100px;
  margin-bottom: 136px;
  position: relative; /* 내부에서 버튼 위치를 절대적으로 설정 가능 */
`;

export const MakeTeaButtonContainer = styled.div`
  position: absolute; 
  bottom: -60px; 
  right: 55px; /* 버튼의 X축 위치 */
  z-index: 10; /* 버튼이 다른 요소 위로 표시되도록 설정 */
`;



import styled from "styled-components";

// 전체 페이지 컨테이너
export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(12, 1fr); 
  grid-gap: 32px;
  padding: 0 128px; 
  box-sizing: border-box; 
  min-height: 100vh; 
`;

// 메인 콘텐츠
export const Main = styled.main`
  grid-column: span 12; /* 메인 콘텐츠가 전체 12열을 차지 */
  /* padding-bottom: 193px; 푸터 높이만큼 여백 추가 */
  padding: 16px; 
  box-sizing: border-box; 
`;

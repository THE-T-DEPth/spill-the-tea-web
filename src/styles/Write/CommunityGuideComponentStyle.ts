import styled from 'styled-components';

export const CommunityGuide = styled.div`
  display: flex;
  flex-direction: column;
  width: 453px;
  border-radius: 16px;
  box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.14);
  padding: 0 40px 3px 40px;
  position: absolute;
  background-color: white;
  font: var(--labelMedium);
  top: 220px; /* TopDiv 바로 아래 */
  z-index: 10; /* 다른 요소들 위로 표시 */

  ul {
    margin: 0;
    padding-left: 20px;
  }

  li {
    margin: 0;
    line-height: 1.5;
  }
`;

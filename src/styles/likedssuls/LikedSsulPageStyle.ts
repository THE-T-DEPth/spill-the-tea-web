import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.div`
  margin: 45px auto 56px;
  width: 100%;
  height: 975px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${isMobile} {
    margin: 13px auto 41px;
    height: 1051px;
  }
`;

export const MainContainer = styled.div`
  margin: 0 auto;
  width: 1046px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;

  ${isMobile} {
    width: 359px;
  }
`;

export const SortButtonContainer = styled.div`
  margin-bottom: 14.53px;
  ${isMobile} {
    width: 100%;
    margin: 13 auto 14.53px;
  }
`;

export const GridContainer = styled.div`

  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 47px;
  grid-auto-flow: row;
  width: 100%;
  box-sizing: border-box;
  margin: 27px auto 0;
  height: 853px;

    ${isMobile} {
     width: 359px;
      grid-template-columns: repeat(3, 1fr);
      grid-template-rows: repeat(5, 1fr);
      grid-column-gap: 8px;
      grid-row-gap: 18px;
      transition: all 0.3s ease;
      margin: 0 auto;
      height: 967px;
    }
  }
`;

export const PaginationContainer = styled.div`
  height: 24px;
  display: flex;
  justify-content: center;

  ${isMobile} {
    margin-bottom: 41px;
  }
`;

export const EmptyMessage = styled.span`
  font: var(--searchEmpty);
  color: var(--Secondary2);
`;

export const EmptyContainer = styled.div`
  width: 100%;
  height: 30px;
  display: flex;
  justify-content: center;
  margin: 414px auto 609px;
`;

export const MakeTeaButtonContainer = styled.div`
  position: fixed;
  bottom: 79px;
  right: calc((100% - 1440px) / 2 + 55px);
  z-index: 10;

  @media (max-width: 1440px) {
    right: 55px;
  }

  ${isMobile} {
    display: none;
  }
`;

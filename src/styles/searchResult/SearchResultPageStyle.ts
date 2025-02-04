import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.div`
  width: 100%;
  max-width: 1046px;
  margin: 53px auto 71px;
  overflow: hidden;

  ${isMobile} {
    width: 359px;
    margin: 18px auto 40px;
    transition: all 0.3s ease;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  height: 56px;

  ${isMobile} {
    height: 24px;
    margin-bottom: 15px;
    transition: all 0.3s ease;
  }
`;
export const SearchTitle = styled.span`
  font: var(--labelLarge);

  span {
    font: var(--searchKeyword);
    color: var(--Main3);
  }

  ${isMobile} {
    font: var(--labelMedium);
    transition: all 0.3s ease;
    span {
      font: var(--searchKeywordMini);
    }
  }
`;

export const GridContainer = styled.div`
  width: 100%;
  max-width: 1046px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 47px;
  grid-auto-flow: row;
  box-sizing: border-box;

  ${isMobile} {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 8px;
    grid-row-gap: 18px;
    transition: all 0.3s ease;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const EmptyMessage = styled.span`
  font: var(--searchEmpty);
  color: var(--G5);

  ${isMobile} {
    font: var(--searchEmptyMini);
    color: var(--Secondary1);
    transition: all 0.3s ease;
  }
`;

export const EmptyContainer = styled.div`
  height: 30px;
  display: flex;
  justify-content: center;
  margin: 247px auto 525px;
  ${isMobile} {
    margin: 274px auto 286px;
    transition: all 0.3s ease;
  }
`;

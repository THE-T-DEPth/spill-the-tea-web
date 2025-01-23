import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.div`
  width: 100%;
  margin: 0 auto;

  ${isMobile} {
    width: 100%;
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
  margin-top: 42px;
  ${isMobile} {
    margin-top: 11px;
  }
`;

export const GridContainer = styled.div`
  width: 1046px;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 24px;
  grid-row-gap: 47px;
  grid-auto-flow: row;
  box-sizing: border-box;
  margin: 30px auto 0;
  ${isMobile} {
    width: 359px;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(5, 1fr);
    grid-column-gap: 8px;
    grid-row-gap: 18px;
    transition: all 0.3s ease;
    margin-top: 14.53px;
  }
`;

export const PaginationContainer = styled.div`
  display: flex;
  height: 95px;
  width: 100%;
  justify-content: center;
  ${isMobile} {
    height: 88px;
  }
`;

export const EmptyMessage = styled.span`
  font: var(--searchEmpty);
  color: var(--Black);
  transition: all 0.3s ease;
  white-space: nowrap;
`;

export const EmptyMessageMini = styled.span`
  font: var(--labelMedium);
  color: var(--Secondary1);
  transition: all 0.3s ease;
`;

export const EmptyContainer = styled.div`
  width: 467px;
  height: 30px;
  display: flex;
  justify-content: center;
  margin: 350px auto 422px;
  transition: all 0.3s ease;

  ${isMobile} {
    width: 214px;
    height: 24px;
    margin: 273px auto 284px;
  }
`;

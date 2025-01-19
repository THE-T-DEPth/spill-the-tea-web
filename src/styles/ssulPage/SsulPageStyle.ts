import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.div``;

export const EmptyContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 652px;
  height: 53px;
  margin: 274px auto 727px;

  ${isMobile} {
    width: 100%;
    margin: 239px auto 284px;
  }
`;

export const EmptyMessage = styled.p`
  color: var(--Secondary2);
  font: var(--headingXXL);
  white-space: nowrap;
  transition: all 0.3s ease;

  ${isMobile} {
    font: var(--dropDown);
  }
`;

export const BoxContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 61px auto 73px;
  width: 1046px;
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
  transition: all 0.3s ease;
`;

export const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  transition: all 0.3s ease;
`;

export const MobileCategoryBar = styled.div`
  width: 100%;
  padding: 0 16px;
  display: flex;
  box-sizing: border-box;
  transition: all 0.3s ease;
  ${isMobile} {
    display: flex;
    flex-direction: column;
  }
`;

export const KeywordContainer = styled.div`
  ${isMobile} {
    display: flex;
  }
`;

export const Title = styled.p`
  font: var(--headingSmall);
  margin-top: 14px;
  transition: all 0.3s ease;
`;

export const KeywordButton = styled.button`
  margin-top: 1px;
  margin-left: auto;
  width: 64px;
  height: 20px;
  border: 0.54px solid var(--Main2);
  border-radius: 2.16px;
  font: var(--keywordButton);
  margin-top: 13px;
  background-color: var(--primary2);
  transition: all 0.3s ease;
`;

import styled from 'styled-components';

export const Container = styled.div`
  width: 1046px;
  height: 909px;
  margin: 53px auto 100px;
`;

export const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  height: 56px;
`;
export const SearchTitle = styled.span`
  font: var(--labelLarge);

  span {
    font: var(--searchKeyword);
    color: var(--Main3);
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
`;

export const SortButton = styled.button`
  display: inline-block;
  margin-top: 1px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
`;

export const EmptyMessage = styled.span`
  font: var(--searchEmpty);
`;

export const EmptyContainer = styled.div`
  width: 467px;
  height: 30px;
  display: flex;
  margin: 317px auto 497px;
`;

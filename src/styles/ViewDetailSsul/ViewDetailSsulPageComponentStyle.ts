import styled from 'styled-components';

export const DSDiv = styled.div<{
  $isRemoveModal: boolean;
  $isComplainModalOpen: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  overflow: ${({ $isRemoveModal, $isComplainModalOpen }) =>
    $isRemoveModal || $isComplainModalOpen ? 'hidden' : 'overlay'};
  box-sizing: border-box;
`;

export const DSCDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 800px) {
    width: 100%;
  }
`;

// export const s = styled.div`

// `;

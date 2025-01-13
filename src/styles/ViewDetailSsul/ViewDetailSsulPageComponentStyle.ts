import styled from 'styled-components';

export const DSDiv = styled.div<{
  $isRemoveModal: boolean;
  $isComplainModalOpen: boolean;
}>`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  overflow: ${({ $isRemoveModal, $isComplainModalOpen }) =>
    $isRemoveModal || $isComplainModalOpen ? 'hidden' : ''};
  box-sizing: border-box;
  margin: 0 auto;
`;

export const DSCDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 80%;
  height: 100%;
  margin: 0 auto;

  @media (max-width: 767px) {
    width: 90%;
  }
`;

// export const s = styled.div`

// `;

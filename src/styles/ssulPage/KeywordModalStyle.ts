import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  position: fixed;
  background: rgba(0, 0, 0, 0.4);
  z-index: 9;
`;

export const ModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  width: 100vw;
  z-index: 10;
  height: calc(100vh - 149px);
  top: 149px;
  background-color: var(--primary2);
  border-radius: 20px 20px 0 0;
`;

export const Title = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 114px;
  justify-content: center;
  padding: 18px 16px 0;
  box-sizing: border-box;
  position: relative;
`;

export const ModalTitle = styled.p`
  font: var(--headingMedium);
  margin: 0;
  width: 82px;
`;

export const CloseIcon = styled.div`
  position: absolute;
  right: 16px;
  width: 24px;
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    width: 11.9px;
    height: 11.9px;
  }
`;

export const CategoryBarContainer = styled.div``;

export const KeywordsBarContainer = styled.div`
  margin-top: auto;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 84px;
  justify-content: center;
  align-items: center;
  display: flex;
  gap: 30px;
  box-sizing: border-box;
`;

export const CancelButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5.79178px 3.30959px;
  gap: 3.31px;

  width: 141.48px;
  height: 41.37px;
  background: var(--primary2);

  border: 0.83px solid #939393;
  border-radius: 3.31px;
  font: var(--KeywordModalButton);
  color: var(--Secondary1);
`;

export const SaveButton = styled.button`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 5.79178px 3.30959px;
  gap: 3.31px;
  color: var(--primary2);
  width: 141.48px;
  height: 41.37px;
  background: var(--Main3);
  /* Earl Grey */
  border: 0.827397px solid #55533e;
  border-radius: 3.30959px;
  font: var(--KeywordModalButton);
`;

import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Title = styled.div<{ disabled?: boolean }>`
  width: 100%;
  height: 27px;
  background: ${({ disabled }) => (disabled ? 'var(--G3)' : 'var(--Main1)')};
  font: var(--boxTitle);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ disabled }) =>
    disabled ? 'var(--G5)' : 'inherit'}; /* 텍스트 색상 변경 */
  transition: all 0.3s ease;

  ${isMobile} {
    height: 17px;
    font: var(--boxTitleMini);
  }
`;

export const Container = styled.div<{ disabled?: boolean }>`
  width: 190px;
  height: 253px;
  box-sizing: border-box;
  background: ${({ disabled }) => (disabled ? '#FCFCFC' : 'var(--Sub1)')};
  border: 0.75px solid
    ${({ disabled }) => (disabled ? 'var(--G3)' : 'var(--Secondary2)')};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &:hover ${Title} {
    background-color: ${({ disabled }) =>
      disabled ? 'var(--G5)' : 'var(--Main3)'};
    transition: all 0.3s ease;
    color: ${({ disabled }) => (disabled ? 'var(--Black)' : 'var(--primary2)')};
    box-shadow: ${({ disabled }) =>
      disabled ? 'none' : '0px 4px 17px rgba(38, 130, 42, 0.25)'};
  }

  ${isMobile} {
    width: 114px;
    height: 179px;
    border: none;
    &:hover {
      box-shadow: none;
    }
  }
`;

export const ImageContainer = styled.div<{ disabled?: boolean }>`
  width: 140px;
  height: 140px;
  margin-top: 8px;
  background: ${({ disabled }) => (disabled ? 'var(--G3)' : 'none')};
  opacity: 1;

  ${isMobile} {
    width: 114px;
    height: 105px;
    margin: 0 0 6px;
  }
`;

export const Image = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 100%;
  cursor: ${({ disabled }) => (disabled ? 'default' : 'pointer')};
  opacity: 1; /* 투명도 제거 */
`;

export const Keywords = styled.div`
  display: flex;
  width: 100%;
  box-sizing: border-box;
  margin: 8px 0 10px;
  padding: 0 17px;
  justify-content: space-between;

  ${isMobile} {
    margin: 0 0 5.32px;
    justify-content: space-between;
    padding: 0;
  }
`;

export const Keyword = styled.span<{ disabled?: boolean; $textLength: number }>`
  padding: 3.5px 6px;
  height: 17px;
  font: var(--boxKeyword);
  color: ${({ disabled }) => (disabled ? 'var(--G5)' : 'var(--primary1)')};
  border-radius: 28px;
  border: 0.6px solid transparent;
  box-sizing: border-box;
  display; flex;

  background-color: ${({ disabled }) =>
    disabled ? 'var(--G3)' : 'transparent'};

  background-image: ${({ disabled }) =>
    disabled
      ? 'none'
      : 'linear-gradient(var(--Yellow), var(--Yellow)), linear-gradient(141.28deg, #fffdee 12.77%, #dec181 57.01%)'};
  background-origin: border-box;
  background-clip: padding-box, border-box;

  ${isMobile} {
    padding-top: 2.84px;
    padding-bottom: 2.84px;
    padding-left: ${({ $textLength }) => ($textLength >= 6 ? '2px' : '5px')};
    padding-right:${({ $textLength }) => ($textLength >= 6 ? '2px' : '5px')};
    white-space: nowrap;
    height: 13.68px;
    font: var(--boxKeywordMini);
    border-radius: 22.5295px;
    border: 0.48px solid transparent;
  }
`;

export const InfoContainer = styled.div<{ disabled?: boolean }>`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: start;
  width: 100%;
  height: 43px;
  padding-left: 19px;
  font: var(--boxInfo);
  color: ${({ disabled }) => (disabled ? 'var(--G5)' : 'var(--primary1)')};
  margin: 0;

  ${isMobile} {
    height: 24.44px;
    padding-left: 3px;
    font: var(--boxInfoMini);
  }
`;

export const LikeContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
  height: 14px;
  align-items: center;

  ${isMobile} {
    gap: 12px;
    height: 11.26px;
    margin-bottom: 2px;
  }
`;

export const Likes = styled.span<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ disabled }) => (disabled ? 'var(--G5)' : 'inherit')};

  ${isMobile} {
    gap: 3px;
    img {
      width: 9.39px;
      height: 8.61px;
      padding: 1.41px 0.94px;
    }
  }
`;

export const Comments = styled.span<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ disabled }) => (disabled ? 'var(--G5)' : 'inherit')};
  ${isMobile} {
    gap: 3px;
    img {
      width: 9.39px;
      height: 9.39px;
    }
  }
`;

export const TimeContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 11.17px;
  justify-content: center;
  align-items: center;
  color: ${({ disabled }) => (disabled ? 'var(--G5)' : 'inherit')};

  ${isMobile} {
    height: 11.17px;
    img {
      width: 9.31px;
      height: 9.31px;
    }
  }
`;

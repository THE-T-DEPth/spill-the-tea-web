import styled from "styled-components";

export const OutContainer = styled.div`
  width: 1184px;
  height: 376px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
`;

export const LeftArrow = styled.button`
  position: absolute;
  left: 0;
  top: 50%;
  transform: translate(-100%, -50%);
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const RightArrow = styled.button`
  position: absolute;
  right: 0;
  top: 50%;
  transform: translate(100%, -50%);
  background: none;
  border: none;
  cursor: pointer;
  img {
    width: 24px;
    height: 24px;
  }
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const Container = styled.div`
  width: 1046px;
  height: 100%;
  background-color: #f6f6f6;
  border: 0.75px solid #dbdbdb;
  display: flex;
  flex-direction: column;
  margin-left: 69px;
  margin-right: 69px;
`;

export const HeaderWrap = styled.div`
  width: 100%;
  height: 45px;
  background-color: var(--Main1);
  display: flex;
  align-items: center;
  font: var(--headerTop);
  border-bottom: 0.75px solid #dbdbdb;
`;

export const Header = styled.div`
  font: var(--headerTop);
  background-color: var(--Main1);
  color: var(--Black);
  padding-left: 34px;
`;

export const ContentContainer = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  overflow: hidden;
  position: relative;
  background-color: var(--BackYellow);
`;

export const Slider = styled.div<{ startIndex: number }>`
  display: flex;
  transition: transform 0.3s ease-in-out;
  transform: ${({ startIndex }) => `translateX(-${startIndex * 25}%)`};
  width: max-content;
`;

export const BoxWrapper = styled.div`
  flex-shrink: 0;
  width: 190px;
  height: 253px;
  margin-top: 37px;
  margin-left: 22px;
  margin-right: 22px;
  background-color:var(--Sub1);
  border: 0.75px solid #dbdbdb;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:last-child {
    margin-right: 0;
  }
`;

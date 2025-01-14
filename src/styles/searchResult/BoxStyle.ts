import styled from "styled-components";

export const Title = styled.div<{ disabled?: boolean }>`
  width: 100%;
  height: 27px;
  background: ${({ disabled }) => (disabled ? "var(--G3)" : "var(--Main1)")};
  font: var(--boxTitle);
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${({ disabled }) => (disabled ? "var(--G5)" : "inherit")}; /* 텍스트 색상 변경 */
`;

export const Container = styled.div<{ disabled?: boolean }>`
  width: 190px;
  height: 253px;
  box-sizing: border-box;
  background: ${({ disabled }) => (disabled ? "#FCFCFC" : "var(--Sub1)")};
  border: 0.75px solid ${({ disabled }) => (disabled ? "var(--G3)" : "var(--Secondary2)")};
  display: flex;
  flex-direction: column;
  align-items: center;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: ${({ disabled }) =>
		disabled ? "none" : "0px 4px 17px rgba(38, 130, 42, 0.25)"};
  }

  &:hover ${Title} {
    background-color: ${({ disabled }) =>
		disabled ? "var(--G5)" : "var(--Main3)"};
    transition: all 0.3s ease;
  }
`;

export const ImageContainer = styled.div<{ disabled?: boolean }>`
  width: 140px;
  height: 140px;
  margin-top: 8px;
  background: ${({ disabled }) => (disabled ? "var(--G3)" : "none")};
  opacity: 1; /* 투명도 제거 */
`;

export const Image = styled.img<{ disabled?: boolean }>`
  width: 100%;
  height: 100%;
  object-fit: cover;
  cursor: ${({ disabled }) => (disabled ? "default" : "pointer")};
  opacity: 1; /* 투명도 제거 */
`;

export const Keywords = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  gap: 13px;
  margin: 8px 0 10px;
`;

export const Keyword = styled.span<{ disabled?: boolean }>`
  padding: 3.5px 6px;
  height: 17px;
  font: var(--boxInfo);
  color: ${({ disabled }) => (disabled ? "var(--G5)" : "var(--primary1)")};
  border-radius: 28px;
  border: 0.6px solid transparent;
  box-sizing: border-box;

  background-color: ${({ disabled }) =>
		disabled ? "var(--G3)" : "transparent"};
  
  background-image: ${({ disabled }) =>
		disabled
			? "none"
			: "linear-gradient(var(--Yellow), var(--Yellow)), linear-gradient(141.28deg, #fffdee 12.77%, #dec181 57.01%)"};
  background-origin: border-box;
  background-clip: padding-box, border-box;
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
  color: ${({ disabled }) => (disabled ? "var(--G5)" : "var(--primary1)")};
  margin: 0;
`;

export const LikeContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  gap: 15px;
  margin-bottom: 5px;
  height: 14px;
  justify-content: center;
  
`;

export const Likes = styled.span<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ disabled }) => (disabled ? "var(--G5)" : "inherit")};
`;

export const Comments = styled.span<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  color: ${({ disabled }) => (disabled ? "var(--G5)" : "inherit")};
`;

export const TimeContainer = styled.div<{ disabled?: boolean }>`
  display: flex;
  align-items: center;
  gap: 4px;
  height: 14px;
  justify-content: center;
  color: ${({ disabled }) => (disabled ? "var(--G5)" : "inherit")};
`;

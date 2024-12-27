import styled from "styled-components";

export const InputWrap = styled.div`
  display: flex;
  align-items: flex-start; /* 위로 이동하지 않도록 수정 */
  position: relative;
  flex-direction: column; /* 문구를 아래로 배치 */
  width: 100%;
  
`;

export const Input = styled.input`
  width: 374px;
  height: 45px;
  border: none; /* 테두리 경계 제거 */
  border-radius: 8px;
  background-color: var(--InputBack);
  padding: 10px 13px 11px 13px; /* 오른쪽 여백을 아이콘 버튼과 조화롭게 조정 */
  font: var(--labelMedium);
  color: var(--Sub5);
  box-sizing: border-box;

  &::placeholder {
    color: #bbb;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 4px rgba(76, 175, 80, 0.5);
  }
`;



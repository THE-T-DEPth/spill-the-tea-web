import styled from "styled-components";

export const Container = styled.div`
  width: 404px;
  height: 882px;
  display: flex;
  flex-direction: column;
  margin: 43px auto 84px;
`;

export const Title = styled.span`
  font: var(--mypageTitle);
  width: 100%;
  height: 30px;
  text-align: center;
`;

export const ImgContainer = styled.div`
  margin: 13px 77px 35px;
  width: 250px;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
  }
`;

export const ProfileButton = styled.div`
  display: flex;
  width: 350px;
  height: 44px;
  gap: 64px;
  margin: 0 27px 50px;
`;

export const ChangeButton = styled.button`
  width: 143px;
  height: 100%;
  font: var(--labelMedium);
  color: var(--Secondary1);
  box-sizing: border-box;
  padding: 7px 4px;
  background: var(--primary2);
  border: 1px solid var(--Main2);
  border-radius: 4px;
  cursor: pointer;
`;

export const DeleteButton = styled.button`
  width: 143px;
  height: 100%;
  font: var(--labelMedium);
  color: var(--Secondary1);
  box-sizing: border-box;
  padding: 7px 4px;
  background: var(--primary2);
  border: 1px solid var(--Main2);
  border-radius: 4px;
  cursor: pointer;
`;

export const NicknameLabel = styled.label`
  width: 100%;
  height: 30px;
  font: var(--mypageTitle);
  margin-bottom: 14px 
  box-sizing: border-box;
`;

export const NicknameInput = styled.input`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  margin-bottom: 30px;
  font: var(--labelMedium);
  padding: 6px 13px 7px;
  border: none;
  background: var(--Input);
  border-radius: 8px;
  color: var(--Secondary1);
  &:focus {
    outline: none;
  }
`;

export const PasswordLabel = styled.span`
  width: 100%;
  font: var(--mypageTitle);
  margin-bottom: 14px;
`;

export const PasswordContainer = styled.div`
  width: 100%;
  height: 67px;
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  padding: 10.5px 13px;
  border: none;
  background: var(--Input);
  border-radius: 8px;
  &::placeholder {
    color: var(--Secondary1);
    font: var(--labelMedium);
  }
  &:focus {
    outline: none;
  }
`;

export const CheckContainer = styled.div`
  width: 100%;
  height: 67px;
`;

export const CheckInput = styled.input`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  padding: 10.5px 13px;
  border: none;
  background: var(--Input);
  border-radius: 8px;
  margin-top: 14px;
  &::placeholder {
    color: var(--Secondary1);
    font: var(--labelMedium);
  }
  &:focus {
    outline: none;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 393px;
  height: 50px;
  gap: 51px;
  margin: 62px 5.5px 0;
`;

export const CancelButton = styled.button`
  box-sizing: border-box;
  padding: 7px 4px;
  gap: 4px;
  width: 171px;
  height: 50px;
  background: var(--primary2);
  border: 1px solid var(--Secondary2);
  border-radius: 4px;
  font: var(--mypageButton);
  color: var(--Secondary1);
  cursor: pointer;
`;

export const SaveButton = styled.button`
  padding: 7px 4px;
  gap: 4px;
  width: 171px;
  height: 50px;
  border: none;
  background: var(--Main3);
  border-radius: 4px;
  font: var(--mypageButton);
  color: var(--primary2);
  cursor: pointer;
`;

export const ErrorMessage = styled.p<{ $isDefault: boolean }>`
  font: var(--paragraphSmall);
  color: ${(props) => (props.$isDefault ? "var(--primary1)" : "var(--Red)")};
  margin-top: 3px;
  margin-bottom: 0;
`;

export const CheckMessage = styled.p<{ $isMatch: boolean }>`
  font: var(--paragraphSmall);
  color: ${(props) => (props.$isMatch ? "var(--primary1)" : "var(--Red)")};
  margin-top: 3px;
  margin-bottom: 0;
  height: 19px;
`;

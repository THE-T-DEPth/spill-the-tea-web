import styled from 'styled-components';
import { isMobile } from '../../hooks/Media';

export const Container = styled.div`
  width: 404px;
  height: 882px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 76px auto 84px;

  ${isMobile} {
    width: 358px;
    margin: 42px auto 116px;
    transition: all 0.3s ease;
  }
`;

export const Title = styled.span`
  font: var(--mypageTitle);
  width: 100%;
  height: 30px;
  text-align: center;

  ${isMobile} {
    font: var(--headingMedium);
    height: 22px;
    transition: all 0.3s ease;
  }
`;

export const ImgContainer = styled.div`
  margin: 13px 77px 35px;
  width: 250px;
  height: 250px;

  img {
    width: 100%;
    height: 100%;
  }

  ${isMobile} {
    width: 180px;
    height: 180px;
    transition: all 0.3s ease;
    margin: 9.84px auto 26.5px;
  }
`;

export const ProfileButton = styled.div`
  display: flex;
  width: 350px;
  height: 44px;
  gap: 64px;
  margin: 0 27px 50px;

  ${isMobile} {
    width: 263px;
    height: 33px;
    gap: 48px;
    margin: 0 46px 33.66px;
  }
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

  ${isMobile} {
    width: 108px;
    font: var(--changeButtonMini);
  }
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

  ${isMobile} {
    width: 108px;
    font: var(--changeButtonMini);
  }
`;

export const NicknameLabel = styled.label`
  width: 100%;
  height: 30px;
  font: var(--mypageTitle);
  margin-bottom: 14px 
  box-sizing: border-box;

  ${isMobile} {
  font: var(--headingSmall);
  margin-bottom: 11px;
  height: 17px;

  }
`;

export const NicknameInput = styled.input`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  margin-bottom: 30px;
  font: var(--labelMedium);
  padding: 6px 13px 7px;
  border: none;
  background: var(--InputBack);
  border-radius: 8px;
  color: var(--Secondary1);
  &:focus {
    outline: none;
  }

  ${isMobile} {
    border-radius: 4px;
    margin-bottom: 22px;
  }
`;

export const PasswordLabel = styled.span`
  width: 100%;
  font: var(--mypageTitle);
  margin-bottom: 14px;

  ${isMobile} {
    font: var(--headingSmall);
  }
`;

export const PasswordContainer = styled.div`
  width: 100%;
  height: 67px;
  ${isMobile} {
    height: 86px;
  }
`;

export const PasswordInput = styled.input`
  width: 100%;
  height: 45px;
  box-sizing: border-box;
  padding: 10.5px 13px;
  border: none;
  background: var(--InputBack);
  border-radius: 8px;
  &::placeholder {
    color: var(--Secondary1);
    font: var(--labelMedium);
  }
  &:focus {
    outline: none;
  }
  ${isMobile} {
    border-radius: 4px;
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
  background: var(--InputBack);
  border-radius: 8px;
  margin-top: 14px;
  &::placeholder {
    color: var(--Secondary1);
    font: var(--labelMedium);
  }
  &:focus {
    outline: none;
  }
  ${isMobile} {
    border-radius: 4px;
    margin-top: 11px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 393px;
  height: 50px;
  gap: 51px;
  margin: 62px 5.5px 0;

  ${isMobile} {
    width: 264px;
    height: 33px;
    margin: 42px 47px 0;
    gap: 48px;
  }
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

  ${isMobile} {
    width: 108px;
    height: 33px;
    font: var(--changeButtonMini);
  }
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

  ${isMobile} {
    width: 108px;
    height: 33px;
    font: var(--changeButtonMini);
  }
`;

export const ErrorMessage = styled.p<{ $isDefault: boolean }>`
  font: var(--paragraphSmall);
  color: ${(props) => (props.$isDefault ? 'var(--primary1)' : 'var(--error1)')};
  margin-top: 3px;
  margin-bottom: 0;
  height: 19px;

  ${isMobile} {
    margin-bottom: 11px;
    white-space: pre-wrap;
    height: 38px;
  }
`;

export const CheckMessage = styled.p<{ $isMatch: boolean }>`
  font: var(--paragraphSmall);
  color: ${(props) => (props.$isMatch ? 'var(--primary1)' : 'var(--error1)')};
  margin-top: 3px;
  margin-bottom: 0;
  height: 19px;
`;

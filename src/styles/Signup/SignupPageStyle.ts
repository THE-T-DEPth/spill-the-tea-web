import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color:var(--BackFirst);
`;

export const Header = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font: var(--headingXXL);
  color: var(--Black);
  margin-top: 135px;
`;

export const SignupBox = styled.div`
  width: 452px;
  background:var(--Sub1);
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 119px;
`;

export const SignupInputWrapper = styled.div`
  width: 374px;
  margin-top: 55px;
`;

export const NameInputWrapper = styled.div`
  width: 100%;
  margin-bottom: 17px;
`;

export const InputWrapper = styled.div`
  width: 100%;
`;

export const NickNameInputWrapper = styled.div`
  width: 100%;
  margin-top: 17px;
`;

export const SignInputWrapper = styled.div`
  width: 100%;
  margin-top: 30px;
`;

export const Label = styled.label`
  font: var(--loginSmall);
  color: var(--Sub5);
  margin-bottom: 12px;
  display: block;
`;

export const NicknameStatusText = styled.p<{ status: 'valid' | 'invalid' | null }>`
  font: var(--paragraphSmall);
  margin-top: 2.82px;
  color: ${(props) =>
		props.status === 'valid'
			? 'green'
			: props.status === 'invalid'
				? 'red'
				: 'transparent'};
  visibility: ${(props) => (props.status ? 'visible' : 'hidden')};
  height: 20px;
  transition: color 0.3s ease;
`;


export const PasswordGuideline = styled.p`
  font: var(--paragraphMini);
  color: var(--G5);
  margin-top: 5px;
  margin-bottom: 11px;
`;

export const ErrorMessage = styled.p`
  font: var(--paragraphSmall); 
  color: transparent; 
  margin-top: 2.82px; 
  margin-left: 0; 
  align-self: flex-start;
  height: 1em; 
  transition: color 0.2s ease-in-out; 

  &.visible {
    color: var(--error1); 
  }
`;
export const SubmitButton = styled.button<{ disabled: boolean }>`
  width: 100%;
  height: 45px;
  margin-top: 49px;
  margin-bottom: 46px;
  padding-top: 4px;
  padding-bottom: 2.5px;
  background-color: ${(props) => (props.disabled ? 'var(--Green2)' : 'var(--InputBack)')};
  color: ${(props) => (props.disabled ? '#fff' : 'var(--primary2)')};
  border: none;
  border-radius: 8px;
  font: var(--labelLarge);
  cursor: ${(props) => (props.disabled ? 'not-allowed' : 'pointer')};
  transition: background-color 0.3s ease, color 0.3s ease;

  &:hover:not(:disabled) {
    background-color: var(--Green2); /* 비활성화 상태가 아닌 경우 hover 색상 */
  }
`;



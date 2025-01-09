import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #f6f6f6;
`;

export const Header = styled.div`
  text-align: center;
`;

export const Title = styled.h1`
  font: var(--headingXXL);
  color: var(--Black);
  margin-top: 149px;
`;

export const Subtitle = styled.p`
  font: var(--labelLarge);
  color: var(--Black);
  margin-top: 8px;
  margin-bottom: 41px;
`;

export const Label = styled.label`
  font: var(--loginSmall);
  color: var(--Sub5);
  margin-bottom: 12px;
  display: block;
`;

export const SignupBox = styled.div`
  width: 452px;
  background: #ffffff;
  box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 22px;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 132px;
`;

export const InputWrapper = styled.div`
  width: 100%;
  margin-bottom: 16px;
`;

export const SignupInputWrapper = styled.div`
  width: 374px;
  margin-top: 55px;
`;

export const CustomButtonUp = styled.button`
  width: 100%;
  height: 45px;
  padding-top: 13px;
  padding-bottom: 11px;
  background-color: var(--InputBack);
  color: var(--Green2);
  border: none;
  border-radius: 8px;
  font: var(--headingMedium);
  cursor: pointer;
`;

export const CustomButton = styled.button`
  width: 100%;
  height: 45px;
  margin-top: 74px;
  margin-bottom: 46px;
  padding-top: 4px;
  padding-bottom: 2.5px;
  background-color: var(--InputBack);
  color: var(--primary2);
  border: none;
  border-radius: 8px;
  font: var(--labelLarge);
  cursor: pointer;
 background-color: var(--Green2);
  
`;

export const TypeInputWrapper = styled.div`
  height: 45px;
  margin-top: 47px;
`;

export const EmailStatusText = styled.p<{ status: 'valid' | 'invalid' | null }>`
  font: var(--paragraphSmall);
  margin-top: 2.82px;
  color: ${(props) =>
		props.status === 'valid'
			? 'red'
			: props.status === 'invalid'
				? 'red'
				: 'transparent'};
  visibility: ${(props) => (props.status ? 'visible' : 'hidden')};
  height: 20px;
  transition: color 0.3s ease;
`;

export const TimerText = styled.p`
  font: var(--paragraphSmall);
  margin-top: 8px;
  color: var(--HeadLine);
  text-align: left;
  height: 20px;
`;

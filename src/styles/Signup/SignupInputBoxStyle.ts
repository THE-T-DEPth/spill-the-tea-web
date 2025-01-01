import styled from 'styled-components';

export const InputWrap = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	position: relative; /* ButtonOverlay를 올리기 위해 relative 필요 */
`;

export const InputContainer = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	position: relative; /* ButtonOverlay가 InputField 위에 올라가도록 설정 */
`;

export const InputField = styled.input`
	width: 100%;
	height: 45px;
	border: none;
	border-radius: 8px;
	background-color: var(--InputBack);
	padding: 10px 13px;
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

export const ButtonOverlay = styled.div`
	position: absolute;
	width: 86px; 
	height: 33px; 
	top: 50%; /* 입력 필드의 가운데에 버튼을 배치 */
	transform: translateY(-50%); 
	right: 14px; 
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 10; /* 다른 요소 위에 표시 */
	background-color: white;
	border: 0.7px solid ; 
	border-color: var(--Green2);
	border-radius: 5px;
	color:var(--EarlGrey);
	font:var(--buttonText);
	cursor: pointer;
	box-sizing: border-box; 
	
`;


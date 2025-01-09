import React from 'react';
import * as S from '../../styles/Signup/SignupInputBoxStyle';


interface SignupInputBoxProps {
	placeholder: string;
	value: string;
	onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
	type: string; // 필수 속성으로 type 추가
	button?: React.ReactNode; // 버튼 속성 추가
}

const SignupInputBox: React.FC<SignupInputBoxProps> = ({
	placeholder,
	value,
	onChange,
	type,
	button,
}) => {
	return (
		<S.InputWrap>

			<S.InputContainer>
				<S.InputField
					type={type}
					placeholder={placeholder}
					value={value}
					onChange={onChange}
				/>
				{button && <S.ButtonOverlay>{button}</S.ButtonOverlay>}
			</S.InputContainer>
		</S.InputWrap>
	);
};

export default SignupInputBox;

import React from "react";
import * as S from "../../styles/Login/LoginInputStyle";

interface LoginInputProps {
	type: "text" | "password" | "email";
	text: string;
	setText: React.Dispatch<React.SetStateAction<string>>;
	placeholder: string;
	onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void; // onChange 추가
}

const LoginInput: React.FC<LoginInputProps> = ({ type, text, setText, placeholder, onChange }) => {
	return (
		<S.InputWrap>
			<S.Input
				type={type}
				placeholder={placeholder}
				value={text}
				onChange={(e) => {
					setText(e.target.value); // setText로 상태 업데이트
					if (onChange) {
						onChange(e); // 전달된 onChange 호출
					}
				}}
				spellCheck={false}
				minLength={1}
			/>
		</S.InputWrap>
	);
};

export default LoginInput;

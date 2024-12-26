import React from "react";
import * as S from "../../styles/Login/LoginInputStyle";

interface LoginInputProps {
	type: "text" | "password";
	text: string;
	setText: React.Dispatch<React.SetStateAction<string>>;
	placeholder: string;
}

const LoginInput: React.FC<LoginInputProps> = ({ type, text, setText, placeholder }) => {
	return (
		<S.InputWrap>
			<S.Input
				type={type}
				placeholder={placeholder}
				value={text}
				onChange={(e) => setText(e.target.value)}
				spellCheck={false}
				minLength={1}
			/>
		</S.InputWrap>
	);
};

export default LoginInput;

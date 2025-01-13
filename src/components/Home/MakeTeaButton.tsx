import React from "react";

import * as S from "../../styles/Home/MakeTeaButtonStyle";
import LeafIcon from "../../assets/icons/Leaf.svg";

const MakeTeaButton: React.FC = () => {
	return (
		<S.ButtonContainer onClick={() => console.log("티 만들기 버튼 클릭됨!")}>
			<S.Leaf src={LeafIcon} alt="Leaf Icon" />
			티 만들기
		</S.ButtonContainer>
	);
};

export default MakeTeaButton;

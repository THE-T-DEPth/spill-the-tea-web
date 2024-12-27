import React from 'react';
import * as S from '../../styles/Home/MainInputBoxStyle';
import VectorLeft from '../../assets/Icons/VectorLeft.svg';
import VectorRight from '../../assets/Icons/VectorRight.svg';

interface MainInputBoxProps {
	text: string; // Header에 표시할 텍스트 내용
}

const MainInputBox: React.FC<MainInputBoxProps> = ({ text }) => {
	return (
		<S.OutContainer>
			<S.LeftArrow onClick={() => console.log("Left arrow clicked!")}>
				<img src={VectorLeft} alt="Left Arrow" />
			</S.LeftArrow>
			<S.Container>
				<S.HeaderWrap>
					<S.Header>{text}</S.Header>
				</S.HeaderWrap>
				<S.ContentContainer>
					<S.ContentBox>
						{/* 내부 컴포넌트 추가 예정 */}
					</S.ContentBox>
				</S.ContentContainer>
			</S.Container>
			<S.RightArrow onClick={() => console.log("Right arrow clicked!")}>
				<img src={VectorRight} alt="Right Arrow" />
			</S.RightArrow>
		</S.OutContainer>
	);
};

export default MainInputBox;

// MainInputBox.tsx
import React, { useState } from "react";
import * as S from "../../styles/Home/MainInputBoxStyle";
import VectorLeft from "../../assets/Icons/VectorLeft.svg";
import VectorRight from "../../assets/Icons/VectorRight.svg";
import Box, { BoxProps } from "../searchResult/Box";

interface MainInputBoxProps {
	text: string; // Header에 표시할 텍스트 내용
	boxData: BoxProps[]; // Box 컴포넌트의 데이터를 배열로 전달받음
}

// const ITEMS_PER_PAGE = 4;

const MainInputBox: React.FC<MainInputBoxProps> = ({ text, boxData }) => {
	const [startIndex, setStartIndex] = useState(0);

	const handleNext = () => {
		setStartIndex((prevIndex) =>
			(prevIndex + 1) % boxData.length
		);
	};

	const handlePrev = () => {
		setStartIndex((prevIndex) =>
			(prevIndex - 1 + boxData.length) % boxData.length
		);
	};

	return (
		<S.OutContainer>
			<S.LeftArrow onClick={handlePrev} disabled={boxData.length === 0}>
				<img src={VectorLeft} alt="Left Arrow" />
			</S.LeftArrow>
			<S.Container>
				<S.HeaderWrap>
					<S.Header>{text}</S.Header>
				</S.HeaderWrap>
				<S.ContentContainer>
					<S.Slider startIndex={startIndex}>
						{boxData.map((data, index) => (
							<S.BoxWrapper key={index}>
								<Box {...data} />
							</S.BoxWrapper>
						))}
					</S.Slider>
				</S.ContentContainer>
			</S.Container>
			<S.RightArrow onClick={handleNext} disabled={boxData.length === 0}>
				<img src={VectorRight} alt="Right Arrow" />
			</S.RightArrow>
		</S.OutContainer>
	);
};

export default MainInputBox;

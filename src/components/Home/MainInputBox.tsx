import React, { useState } from "react";
import * as S from "../../styles/Home/MainInputBoxStyle";
import VectorLeft from "../../assets/Icons/VectorLeft.svg";
import VectorRight from "../../assets/Icons/VectorRight.svg";
import Box, { BoxProps } from "../searchResult/Box";

interface MainInputBoxProps {
	text: string; // Header에 표시할 텍스트 내용
	boxData: BoxProps[]; // Box 컴포넌트의 데이터를 배열로 전달받음
	emptyText?: string; // boxData가 없을 때 표시할 텍스트
}

const ITEMS_PER_PAGE = 4;

const MainInputBox: React.FC<MainInputBoxProps> = ({ text, boxData, emptyText }) => {
	const [startIndex, setStartIndex] = useState(0);

	const handleNext = () => {
		setStartIndex((prevIndex) =>
			Math.min(prevIndex + ITEMS_PER_PAGE, boxData.length - ITEMS_PER_PAGE)
		);
	};

	const handlePrev = () => {
		setStartIndex((prevIndex) => Math.max(prevIndex - ITEMS_PER_PAGE, 0));
	};

	return (
		<S.OutContainer>
			<S.LeftArrow onClick={handlePrev} disabled={startIndex === 0}>
				<img src={VectorLeft} alt="Left Arrow" />
			</S.LeftArrow>
			<S.Container>
				<S.HeaderWrap>
					<S.Header>{text}</S.Header>
				</S.HeaderWrap>
				<S.ContentContainer>
					{boxData.length === 0 ? (
						<S.EmptyMessage>{emptyText || "데이터가 없습니다."}</S.EmptyMessage>
					) : (
						<S.Slider startIndex={startIndex}>
							{boxData.map((data, index) => {
								const isActive =
									index >= startIndex && index < startIndex + ITEMS_PER_PAGE;
								return (
									<S.BoxWrapper key={index} isActive={isActive}>
										<Box {...data} disabled={!isActive} />
									</S.BoxWrapper>
								);
							})}
						</S.Slider>
					)}
				</S.ContentContainer>
			</S.Container>
			<S.RightArrow
				onClick={handleNext}
				disabled={startIndex + ITEMS_PER_PAGE >= boxData.length}
			>
				<img src={VectorRight} alt="Right Arrow" />
			</S.RightArrow>
		</S.OutContainer>
	);
};

export default MainInputBox;

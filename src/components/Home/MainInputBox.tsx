import React, { useState } from "react";
import * as S from "../../styles/Home/MainInputBoxStyle";
import VectorLeft from "../../assets/Icons/VectorLeft.svg";
import VectorRight from "../../assets/Icons/VectorRight.svg";
import Box, { BoxProps } from "../searchResult/Box";

interface MainInputBoxProps {
	text: string;
	boxData: BoxProps[];
	emptyText?: string;
}

const ITEMS_PER_PAGE = 4;
const MAX_ITEMS = 12;

const MainInputBox: React.FC<MainInputBoxProps> = ({ text, boxData, emptyText }) => {
	const normalizedData = boxData.length > MAX_ITEMS
		? boxData.slice(0, MAX_ITEMS)
		: [...boxData, ...Array(MAX_ITEMS - boxData.length).fill(null)];


	const loopedData = [
		...normalizedData.slice(-ITEMS_PER_PAGE),
		...normalizedData,
		...normalizedData.slice(0, ITEMS_PER_PAGE),
	];

	const [currentIndex, setCurrentIndex] = useState(ITEMS_PER_PAGE);
	const [isTransitioning, setIsTransitioning] = useState(false);


	const handleNext = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentIndex((prevIndex) => prevIndex + ITEMS_PER_PAGE);
	};


	const handlePrev = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);
		setCurrentIndex((prevIndex) => prevIndex - ITEMS_PER_PAGE);
	};


	const handleTransitionEnd = () => {
		setIsTransitioning(false);


		if (currentIndex >= loopedData.length - ITEMS_PER_PAGE) {
			setCurrentIndex(ITEMS_PER_PAGE);
		}


		if (currentIndex < ITEMS_PER_PAGE) {
			setCurrentIndex(loopedData.length - ITEMS_PER_PAGE * 2);
		}
	};

	return (
		<S.OutContainer>
			<S.LeftArrow onClick={handlePrev}>
				<img src={VectorLeft} alt="Left Arrow" />
			</S.LeftArrow>
			<S.Container>
				<S.HeaderWrap>
					<S.Header>{text}</S.Header>
				</S.HeaderWrap>
				<S.ContentContainer>
					{normalizedData.length === 0 ? (
						<S.EmptyMessage>{emptyText || "데이터가 없습니다."}</S.EmptyMessage>
					) : (
						<S.Slider
							startIndex={currentIndex}
							onTransitionEnd={handleTransitionEnd}
							isTransitioning={isTransitioning}
						>
							{loopedData.map((data, index) => {
								const isActive =
									index >= currentIndex && index < currentIndex + ITEMS_PER_PAGE;

								return (
									<S.BoxWrapper key={index} isActive={isActive}>
										{data ? <Box {...data} disabled={!isActive} /> : null}
									</S.BoxWrapper>
								);
							})}
						</S.Slider>
					)}
				</S.ContentContainer>
			</S.Container>
			<S.RightArrow onClick={handleNext}>
				<img src={VectorRight} alt="Right Arrow" />
			</S.RightArrow>
		</S.OutContainer>
	);
};

export default MainInputBox;

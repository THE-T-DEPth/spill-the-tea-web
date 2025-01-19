
import React, { useState, useRef } from "react";
import * as S from "../../styles/Home/MainInputBoxStyle";
import Box, { BoxProps } from "../Home/Box";
import VectorLeft from "../../assets/Icons/VectorLeft.svg";
import VectorRight from "../../assets/Icons/VectorRight.svg";
import useNSMediaQuery from "../../hooks/useNSMediaQuery";

interface MainInputBoxProps {
	text: string;
	boxData: BoxProps[];
	emptyText?: string;
}

const ITEMS_PER_PAGE_DESKTOP = 4;
const ITEMS_PER_PAGE_MOBILE = 1;
const MAX_ITEMS = 12;

const MainInputBox: React.FC<MainInputBoxProps> = ({ text, boxData, emptyText }) => {
	const { isMobile } = useNSMediaQuery();
	const ITEMS_PER_PAGE = isMobile ? ITEMS_PER_PAGE_MOBILE : ITEMS_PER_PAGE_DESKTOP;

	const normalizedData = boxData.length > MAX_ITEMS
		? boxData.slice(0, MAX_ITEMS)
		: [...boxData, ...Array(MAX_ITEMS - boxData.length).fill(null)];

	const loopedData = [
		...normalizedData.slice(-ITEMS_PER_PAGE_DESKTOP),
		...normalizedData,
		...normalizedData.slice(0, ITEMS_PER_PAGE_DESKTOP),
	];

	const [currentIndex, setCurrentIndex] = useState(ITEMS_PER_PAGE_DESKTOP);
	const [isTransitioning, setIsTransitioning] = useState(false);

	const startXRef = useRef<number | null>(null);
	const currentXRef = useRef<number | null>(null);


	const handleTouchStart = (e: React.TouchEvent) => {
		startXRef.current = e.touches[0].clientX;
	};


	const handleTouchMove = (e: React.TouchEvent) => {
		currentXRef.current = e.touches[0].clientX;
	};


	const handleTouchEnd = () => {
		if (!startXRef.current || !currentXRef.current) return;

		const diff = startXRef.current - currentXRef.current;

		if (diff > 50) {
			handleNext();
		} else if (diff < -50) {
			handlePrev();
		}

		// 초기화
		startXRef.current = null;
		currentXRef.current = null;
	};

	const handleNext = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);

		if (isMobile) {
			setCurrentIndex((prevIndex) => prevIndex + 1);
		} else {
			setCurrentIndex((prevIndex) => prevIndex + ITEMS_PER_PAGE_DESKTOP);
		}
	};

	const handlePrev = () => {
		if (isTransitioning) return;
		setIsTransitioning(true);

		if (isMobile) {
			setCurrentIndex((prevIndex) => prevIndex - 1);
		} else {
			setCurrentIndex((prevIndex) => prevIndex - ITEMS_PER_PAGE_DESKTOP);
		}
	};

	const handleTransitionEnd = () => {
		setIsTransitioning(false);

		if (currentIndex >= loopedData.length - ITEMS_PER_PAGE_DESKTOP) {
			setCurrentIndex(ITEMS_PER_PAGE_DESKTOP);
		}

		if (currentIndex < ITEMS_PER_PAGE_DESKTOP) {
			setCurrentIndex(loopedData.length - ITEMS_PER_PAGE_DESKTOP * 2);
		}
	};

	return (
		<S.OutContainer
			onTouchStart={isMobile ? handleTouchStart : undefined}
			onTouchMove={isMobile ? handleTouchMove : undefined}
			onTouchEnd={isMobile ? handleTouchEnd : undefined}
		>
			{!isMobile && (
				<S.LeftArrow onClick={handlePrev}>
					<img src={VectorLeft} alt="Left Arrow" />
				</S.LeftArrow>
			)}
			<S.Container>
				<S.HeaderWrap>
					<S.Header>{text}</S.Header>
				</S.HeaderWrap>
				<S.ContentContainer>
					{boxData.length === 0 ? ( // 수정된 조건
						<S.EmptyMessage>{emptyText || "데이터가 없습니다."}</S.EmptyMessage>
					) : (
						<S.Slider
							startIndex={currentIndex}
							onTransitionEnd={handleTransitionEnd}
							isTransitioning={isTransitioning}
							isMobile={isMobile}
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
			{!isMobile && (
				<S.RightArrow onClick={handleNext}>
					<img src={VectorRight} alt="Right Arrow" />
				</S.RightArrow>
			)}
		</S.OutContainer>
	);
};

export default MainInputBox;

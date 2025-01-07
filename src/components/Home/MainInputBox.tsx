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

const ITEMS_PER_PAGE = 4; // 한 번에 표시할 박스 개수

const MainInputBox: React.FC<MainInputBoxProps> = ({ text, boxData, emptyText }) => {
	const [startIndex, setStartIndex] = useState(0);
	const totalItems = boxData.length;

	const handleNext = () => {
		setStartIndex((prevIndex) =>
			(prevIndex + ITEMS_PER_PAGE) % totalItems // ITEMS_PER_PAGE만큼 이동, 마지막에서 처음으로 순환
		);
	};

	const handlePrev = () => {
		setStartIndex((prevIndex) =>
			(prevIndex - ITEMS_PER_PAGE + totalItems) % totalItems // ITEMS_PER_PAGE만큼 이동, 처음에서 마지막으로 순환
		);
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
					{boxData.length === 0 ? (
						<S.EmptyMessage>{emptyText || "데이터가 없습니다."}</S.EmptyMessage>
					) : (
						<S.Slider startIndex={startIndex}>
							{boxData.map((data, index) => {
								// 활성화된 슬라이드 아이템인지 확인
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
			<S.RightArrow onClick={handleNext}>
				<img src={VectorRight} alt="Right Arrow" />
			</S.RightArrow>
		</S.OutContainer>
	);
};

export default MainInputBox;

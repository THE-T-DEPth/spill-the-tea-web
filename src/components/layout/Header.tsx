
import * as S from "../../styles/Layout/HeaderStyle";
import TeaCupIcon from "../../assets/Icons/TeaCup.svg";

const Header = () => {
	return (
		<S.Container>
			{/* 배경 */}
			<S.Background />

			{/* 내용 */}
			<S.Content>
				<S.IconWrapper>
					<img src={TeaCupIcon} alt="Tea Cup Icon" />
				</S.IconWrapper>
				<S.Title>Spill the tea : 썰푸는 장소</S.Title>
			</S.Content>
		</S.Container>
	);
};

export default Header;

import * as S from "../../styles/Layout/FooterStyle";
import LinkIcon from "../../assets/Icons/Link.svg";
import GithubIcon from "../../assets/Icons/Github.svg";
import InstaIcon from "../../assets/Icons/Insta.svg";
import MailIcon from "../../assets/Icons/Mail.svg";
import DepthLogo from "../../assets/Icons/DepthLogo.svg";
import LogoMobile from "../../assets/Icons/LogoMobile.svg"; // 모바일 로고 import
import useNSMediaQuery from "../../hooks/useNSMediaQuery"; // 반응형 훅

const Footer = () => {
	const { isMobile } = useNSMediaQuery(); // 모바일 여부 판단

	return (
		<S.Container>
			<S.Content>
				{/* 로고 */}
				<S.LogoWrapper>
					<img src={isMobile ? LogoMobile : DepthLogo} alt="Depth Logo" />
				</S.LogoWrapper>

				{/* 텍스트 */}
				<S.Text>©DEPth MJU All right Reserved</S.Text>

				{/* 아이콘들 */}
				<S.Icons>
					<S.IconWrapper>
						<a href="https://depth-mju.co.kr/" target="_blank" rel="noopener noreferrer">
							<img src={LinkIcon} alt="Link Icon" />
						</a>
					</S.IconWrapper>
					<S.IconWrapper>
						<a href="https://github.com/DEPthes" target="_blank" rel="noopener noreferrer">
							<img src={GithubIcon} alt="Github Icon" />
						</a>
					</S.IconWrapper>
					<S.IconWrapper>
						<a href="https://www.instagram.com/depth_mju.co.kr/" target="_blank" rel="noopener noreferrer">
							<img src={InstaIcon} alt="Instagram Icon" />
						</a>
					</S.IconWrapper>
					<S.IconWrapper>
						<a href="mailto:2022depth@gmail.com" target="_blank" rel="noopener noreferrer">
							<img src={MailIcon} alt="Mail Icon" />
						</a>
					</S.IconWrapper>
				</S.Icons>
			</S.Content>
		</S.Container>
	);
};

export default Footer;

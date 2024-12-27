import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import NavBar from "../components/layout/NavBar";
import TopBar from "../components/Home/TopBar";
import MainInputBox from "../components/Home/MainInputBox"
import * as S from "../styles/Home/HomPageComponentStyle";

const HomePage = () => {
	return (
		<>
			<Header />
			<NavBar />
			<TopBar text='"오늘도 썰 한 잔, 짤 한 스푼 🍵"' />
			<S.HomeDiv><MainInputBox text='터지는 순 🔥' /></S.HomeDiv>
			<S.HomeDiv2><MainInputBox text='갓 나온 따근따끈' /></S.HomeDiv2>

			<Footer />
		</>
	);
};

export default HomePage;
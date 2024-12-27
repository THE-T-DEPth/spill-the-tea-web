import Header from "../components/layout/Header"
import Footer from "../components/layout/Footer"
import NavBar from "../components/layout/NavBar";
import TopBar from "../components/Home/TopBar";
import * as S from "../styles/Home/HomPageComponentStyle";

const HomePage = () => {
	return (
		<>
			<Header />
			<NavBar />
			<TopBar text='"오늘도 썰 한 잔, 짤 한 스푼 "' />
			<S.HomeDiv>test</S.HomeDiv>
			<S.HomeDiv2>test</S.HomeDiv2>
			<S.HomeDiv3>test</S.HomeDiv3>
			<Footer />
		</>
	);
};

export default HomePage;
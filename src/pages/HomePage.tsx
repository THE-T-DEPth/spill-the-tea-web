import TopBar from "../components/Home/TopBar";
import MainInputBox from "../components/Home/MainInputBox";
import MakeTeaButton from "../components/Home/MakeTeaButton";

import * as S from "../styles/Home/HomPageComponentStyle";
import boxData from "../assets/data/BoxData";

const HomePage = () => {
	return (
		<>
			<TopBar text='"오늘도 썰 한 잔, 짤 한 스푼 🍵"' />
			<S.HomeDiv>
				<MainInputBox
					text="터지는 순 🔥"
					boxData={boxData}
					emptyText="현재는 터지는 티가 없네요,,,"
				/>
			</S.HomeDiv>
			<S.HomeDiv2>
				<MainInputBox
					text="갓 나온 따끈따끈 🍵"
					boxData={boxData}
					emptyText="아직은 따끈따끈한 티가 없네요,,,"
				/>
				{/* "티 만들기" 버튼을 두 번째 MainInputBox에 포함 */}
				<S.MakeTeaButtonContainer>
					<MakeTeaButton />
				</S.MakeTeaButtonContainer>
			</S.HomeDiv2>
		</>
	);
};

export default HomePage;

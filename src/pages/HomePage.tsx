
import TopBar from "../components/Home/TopBar";
import MainInputBox from "../components/Home/MainInputBox";
import MakeTeaButton from "../components/Home/MakeTeaButton";
import * as S from "../styles/Home/HomPageComponentStyle";

const sampleData1 = [
	{
		title: "첫 번째 글",
		image: "/path/to/image1.jpg",
		keywords: ["키워드1", "키워드2"],
		date: "2025-01-02",
		time: "12:00",
		likes: 10,
		comments: "5",
	},
	{
		title: "두 번째 글",
		image: "/path/to/image2.jpg",
		keywords: ["키워드3", "키워드4"],
		date: "2025-01-03",
		time: "14:30",
		likes: 15,
		comments: "8",
	},
	{
		title: "첫 번째 글",
		image: "/path/to/image1.jpg",
		keywords: ["키워드1", "키워드2"],
		date: "2025-01-02",
		time: "12:00",
		likes: 10,
		comments: "5",
	},
	{
		title: "두 번째 글",
		image: "/path/to/image2.jpg",
		keywords: ["키워드3", "키워드4"],
		date: "2025-01-03",
		time: "14:30",
		likes: 15,
		comments: "8",
	},
	{
		title: "첫 번째 글",
		image: "/path/to/image1.jpg",
		keywords: ["키워드1", "키워드2"],
		date: "2025-01-02",
		time: "12:00",
		likes: 10,
		comments: "5",
	},
	{
		title: "두 번째 글",
		image: "/path/to/image2.jpg",
		keywords: ["키워드3", "키워드4"],
		date: "2025-01-03",
		time: "14:30",
		likes: 15,
		comments: "8",
	},
	{
		title: "첫 번째 글",
		image: "/path/to/image1.jpg",
		keywords: ["키워드1", "키워드2"],
		date: "2025-01-02",
		time: "12:00",
		likes: 10,
		comments: "5",
	},
	{
		title: "두 번째 글",
		image: "/path/to/image2.jpg",
		keywords: ["키워드3", "키워드4"],
		date: "2025-01-03",
		time: "14:30",
		likes: 15,
		comments: "8",
	},
	{
		title: "첫 번째 글",
		image: "/path/to/image1.jpg",
		keywords: ["키워드1", "키워드2"],
		date: "2025-01-02",
		time: "12:00",
		likes: 10,
		comments: "5",
	},
	{
		title: "두 번째 글",
		image: "/path/to/image2.jpg",
		keywords: ["키워드3", "키워드4"],
		date: "2025-01-03",
		time: "14:30",
		likes: 15,
		comments: "8",
	},
	{
		title: "첫 번째 글",
		image: "/path/to/image1.jpg",
		keywords: ["키워드1", "키워드2"],
		date: "2025-01-02",
		time: "12:00",
		likes: 10,
		comments: "5",
	},
	{
		title: "두 번째 글",
		image: "/path/to/image2.jpg",
		keywords: ["키워드3", "키워드4"],
		date: "2025-01-03",
		time: "14:30",
		likes: 15,
		comments: "8",
	},


];

const sampleData2 = [
	{
		title: "세 번째 글",
		image: "/path/to/image3.jpg",
		keywords: ["키워드5", "키워드6"],
		date: "2025-01-04",
		time: "10:00",
		likes: 20,
		comments: "12",
	},
	{
		title: "네 번째 글",
		image: "/path/to/image4.jpg",
		keywords: ["키워드7", "키워드8"],
		date: "2025-01-05",
		time: "16:45",
		likes: 25,
		comments: "9",
	},
];

const HomePage = () => {
	return (
		<>
			<TopBar text='"오늘도 썰 한 잔, 짤 한 스푼 🍵"' />
			<S.HomeDiv>
				<MainInputBox
					text='터지는 순 🔥'
					boxData={sampleData1}
					emptyText='현재는 터지는 티가 없네요,,,'
				/>
			</S.HomeDiv>
			<S.HomeDiv2>
				<MainInputBox
					text='갓 나온 따끈따끈 🍵'
					boxData={sampleData2}
					emptyText='아직은 따끈따끈한 티가 없네요,,,'
				/>
			</S.HomeDiv2>
			<S.MakeTeaButtonContainer>
				<MakeTeaButton />
			</S.MakeTeaButtonContainer>
		</>
	);
};


export default HomePage;

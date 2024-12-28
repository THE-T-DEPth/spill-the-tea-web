import Profile from "../images/Profile.svg";

const commentDummy = [
    {
        profile: Profile,
        nickname: "김소연",
        content: "댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글  댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글 댓글 내용댓글",
        date: "24.11.11",
        time: "12:12",
        heart: 200,
        review: [
            {
                profile: Profile, // 대댓글 작성자의 프로필
                nickname: "박지민", // 대댓글 작성자의 닉네임
                content: "대댓글 내용1", // 대댓글 내용
                date: "24.11.12", // 대댓글 작성 날짜
                time: "14:30", // 대댓글 작성 시간
                heart: 50, // 대댓글 공감 수
            },
            {
                profile: Profile,
                nickname: "이유진",
                content: "대댓글 내용2",
                date: "24.11.12",
                time: "15:45",
                heart: 30,
            },
        ],
    },
    {
        profile: Profile,
        nickname: "김소연2",
        content: "댓글 댓글 내용댓글 댓글 내용댓글",
        date: "24.12.11",
        time: "12:12",
        heart: 200,
        review: [],
    },
];


export default commentDummy;
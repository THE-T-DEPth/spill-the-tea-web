import React from "react";
import * as S from "../styles/myPage/MyPageStyle";
import EditProfile from "../components/myPage/EditProfile";

const MyPage = () => {
  return (
    <S.Container>
      <EditProfile />
    </S.Container>
  );
};

export default MyPage;

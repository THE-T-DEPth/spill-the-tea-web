import React from "react";
import * as S from "../styles/myPage/MyPageStyle";
import EditProfile from "../components/myPage/EditProfile";
import LeaveService from "../components/myPage/LeaveService";

const MyPage = () => {
  return (
    <S.Container>
      <LeaveService />
    </S.Container>
  );
};

export default MyPage;

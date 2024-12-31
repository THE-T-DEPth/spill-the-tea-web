import React, { useState } from "react";
import * as S from "../styles/myPage/MyPageStyle";
import EditProfile from "../components/myPage/EditProfile";
import LeaveService from "../components/myPage/LeaveService";
import MyPageNavbar from "../components/myPage/MyPageNavbar";

const MyPage = () => {
  const [activeComponent, setActiveComponent] = useState("editProfile");

  const renderComponent = () => {
    switch (activeComponent) {
      case "editProfile":
        return <EditProfile />;
      case "leaveService":
        return <LeaveService />;

      default:
    }
  };
  return (
    <>
      <MyPageNavbar setActiveComponent={setActiveComponent} />
      <S.Container>{renderComponent()}</S.Container>
    </>
  );
};

export default MyPage;

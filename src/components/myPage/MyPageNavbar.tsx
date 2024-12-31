import React from "react";
import * as S from "../../styles/myPage/MyPageNavbarStyle";

interface MyPageNavbarProps {
  setActiveComponent: (component: string) => void;
}

const MyPageNavbar: React.FC<MyPageNavbarProps> = ({ setActiveComponent }) => {
  return (
    <S.Container>
      <S.NavContainer>
        <S.Edit onClick={() => setActiveComponent("editProfile")}>
          회원정보 수정
        </S.Edit>
        <S.MyPost onClick={() => setActiveComponent("myPosts")}>
          내가 쓴 글 보기
        </S.MyPost>
        <S.Leave onClick={() => setActiveComponent("leaveService")}>
          서비스 떠나기
        </S.Leave>
      </S.NavContainer>
    </S.Container>
  );
};

export default MyPageNavbar;

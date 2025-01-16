import { useState } from 'react';
import * as S from '../styles/myPage/MyPageStyle';
import EditProfile from '../components/myPage/EditProfile';
import LeaveService from '../components/myPage/LeaveService';
import MyPosts from '../components/myPage/MyPosts';
import MyPageNavbar from '../components/myPage/MyPageNavbar';
import TopBar from '../components/searchResult/TopBar';

const MyPage = () => {
  const [activeComponent, setActiveComponent] = useState('editProfile');

  const renderComponent = () => {
    switch (activeComponent) {
      case 'editProfile':
        return <EditProfile />;
      case 'leaveService':
        return <LeaveService />;
      case 'myPosts':
        return <MyPosts />;

      default:
    }
  };
  return (
    <>
      <MyPageNavbar setActiveComponent={setActiveComponent} />
      <TopBar text='마이페이지' />
      <S.Container>{renderComponent()}</S.Container>
    </>
  );
};

export default MyPage;

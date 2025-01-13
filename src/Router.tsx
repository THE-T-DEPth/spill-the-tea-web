import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';

import LoginPage from './pages/LoginPage';
import FindPassPage from './pages/FindPassPage';
import CertificationNumPage from './pages/CertificationNumPage';
// import ViewDetailSsul from "./pages/ViewDetailSsul";
import SearchResultPage from './pages/SearchResultPage';
import SsulPage from './pages/SsulPage';
import TemporaryPassPage from './pages/TemporaryPassPage';
import ChangePassPage from './pages/ChangePassPage';
import SignupEmailPage from './pages/SignupEmailPage';
import SignupPage from './pages/SignupPage';
import SignupDonePage from './pages/SignupDonePage';
import WritePage from './pages/WritePage';
import ViewDetailSsulPage from './pages/ViewDetailSsulPage';
import LikedSsulPage from './pages/LikedSsulPage';
import SignupDonePage from './pages/SignupDonePage';
import MyPage from './pages/MyPage';

const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/searchresult' element={<SearchResultPage />} />
          <Route path='/login' element={<LoginPage />} />
          <Route path='/find-password' element={<FindPassPage />} />
          <Route
            path='/certification-number'
            element={<CertificationNumPage />}
          />
          <Route path='/temporary-password' element={<TemporaryPassPage />} />
          <Route path='/change-password' element={<ChangePassPage />} />
          <Route path='/signup-email' element={<SignupEmailPage />} />
          <Route path='/signup' element={<SignupPage />} />
          <Route path='/signupdone' element={<SignupDonePage />} />
          <Route path='/ssulpage' element={<SsulPage />} />
          <Route path='/viewDetailSsul' element={<ViewDetailSsulPage />} />
          <Route path='/write' element={<WritePage />} />
          <Route path='/likedssuls' element={<LikedSsulPage />} />
          <Route path='/mypage' element={<MyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

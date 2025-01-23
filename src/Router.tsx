import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/layout/Layout';
import HomePage from './pages/HomePage';

import CertificationNumPage from './pages/CertificationNumPage';
import ChangePassPage from './pages/ChangePassPage';
import FindPassPage from './pages/FindPassPage';
import LikedSsulPage from './pages/LikedSsulPage';
import LoginPage from './pages/LoginPage';
import MyPage from './pages/MyPage';
import SearchResultPage from './pages/SearchResultPage';
import SignupDonePage from './pages/SignupDonePage';
import SignupEmailPage from './pages/SignupEmailPage';
import SignupPage from './pages/SignupPage';
import SsulPage from './pages/SsulPage';
import TemporaryPassPage from './pages/TemporaryPassPage';
import ViewDetailSsulPage from './pages/ViewDetailSsulPage';
import WritePage from './pages/WritePage';

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
          <Route
            path='/viewDetailSsul/:postId'
            element={<ViewDetailSsulPage />}
          />
          <Route path='/write' element={<WritePage mode='write' />} />
          <Route path='/edit/:postId' element={<WritePage mode='edit' />} />
          <Route path='/likedssuls' element={<LikedSsulPage />} />
          <Route path='/mypage' element={<MyPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};
export default Router;

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import Layout from './components/layout/Layout';

import LoginPage from './pages/LoginPage';
import FindPassPage from './pages/FindPassPage';
import CertificationNumPage from './pages/CertificationNumPage';
// import ViewDetailSsul from "./pages/ViewDetailSsul";
import SearchResultPage from './pages/SearchResultPage';
import WritePage from './pages/WritePage';
import ViewDetailSsulPage from './pages/ViewDetailSsulPage';

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
          <Route path='/viewDetailSsul' element={<ViewDetailSsulPage />} />
          <Route path='/write' element={<WritePage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

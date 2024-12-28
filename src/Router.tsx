import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ViewDetailSsulPage from './pages/ViewDetailSsulPage';
import SearchResultPage from './pages/SearchResultPage';
const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/viewDetailSsul' element={<ViewDetailSsulPage />} />
        <Route path='/searchresult' element={<SearchResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

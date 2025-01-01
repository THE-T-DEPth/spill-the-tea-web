import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SearchResultPage from "./pages/SearchResultPage";
import Layout from "./components/layout/Layout";


const Router = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/searchresult" element={<SearchResultPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default Router;

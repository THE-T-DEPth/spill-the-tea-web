import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FindPassPage from "./pages/FindPassPage";
import CertificationNumPage from "./pages/CertificationNumPage";
import SearchResultPage from "./pages/SearchResultPage";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/find-password" element={<FindPassPage />} />
        <Route
          path="/certification-number"
          element={<CertificationNumPage />}
        />
        <Route path="/searchresult" element={<SearchResultPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;

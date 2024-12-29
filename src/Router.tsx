import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import FindPassPage from "./pages/FindPassPage";
import CertificationNumPage from "./pages/CertificationNumPage";
import SearchResultPage from "./pages/SearchResultPage";
import TemporaryPassPage from "./pages/TemporaryPassPage";

const Router = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/searchresult" element={<SearchResultPage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/find-password" element={<FindPassPage />} />
				<Route path="/certification-number" element={<CertificationNumPage />} />
				<Route path="/temporary-password" element={<TemporaryPassPage />} />

			</Routes>
		</BrowserRouter>
	);
}

export default Router;

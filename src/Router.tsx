import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Layout from "./components/layout/Layout";

import LoginPage from "./pages/LoginPage";
import FindPassPage from "./pages/FindPassPage";
import CertificationNumPage from "./pages/CertificationNumPage";
// import ViewDetailSsul from "./pages/ViewDetailSsul";
import SearchResultPage from "./pages/SearchResultPage";
import SignupEmailPage from "./pages/SignupEmailPage";
import SignupPage from "./pages/SignupPage";
import SignupDonePage from "./pages/SignupDonePage";

const Router = () => {
	return (

		<BrowserRouter>
			<Layout>
				<Routes>
					<Route path="/" element={<HomePage />} />
					<Route path="/searchresult" element={<SearchResultPage />} />
					<Route path="/login" element={<LoginPage />} />
					<Route path="/find-password" element={<FindPassPage />} />
					<Route path="/certification-number" element={<CertificationNumPage />} />
					<Route path="/signup-email" element={<SignupEmailPage />} />
					<Route path="/signup" element={<SignupPage />} />
					<Route path="/signupdone" element={<SignupDonePage />} />
				</Routes>
			</Layout>
		</BrowserRouter>

	);
}

export default Router;


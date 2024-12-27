import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ViewDetailSsul from "./pages/ViewDetailSsul";

const Router = () => {
    return(
      <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path="/viewDetailSsul" element={<ViewDetailSsul/>}/>
        </Routes>
      </BrowserRouter>
    );
}

export default Router;
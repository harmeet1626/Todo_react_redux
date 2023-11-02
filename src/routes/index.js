import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
function Router_view() {
    return (
        <Routes>
            <Route path="/" element={<Home />} ></Route>
            <Route path="/about" element={<About />}></Route>
        </Routes>
    )
}
export default Router_view
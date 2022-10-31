import "./Section.css";
// import {Link} from "react-router-dom";
import Navigation from "./Navigation"
// External Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Article from "./Article"
import Cpp from "./Cpp";
import Python from "./Python";
function Section() {
    return (
        <>
          <div className="section">
            <BrowserRouter>
            <Navigation></Navigation>
            <Routes>
                {/* <Article></Article> */}
                <Route index element={<Article />}></Route>
                <Route path="cpp" element={<Cpp />}></Route>
                <Route path="python" element={<Python />}></Route>
            </Routes>
            
            </BrowserRouter>
          </div>
        </>
      );
}

export default Section
import "./Section.css";
// import {Link} from "react-router-dom";
import Navigation from "./Navigation"
import Article from "./Article"
function Section() {
    return (
        <>
          <div className="section">
            <Navigation></Navigation>
            <Article></Article>
          </div>
        </>
      );
}

export default Section
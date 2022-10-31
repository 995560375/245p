import "./Navigation.css";
// import {Link} from "react-router-dom";

function Navigation() {
    return (
        <>
          <div className="navigation">
            <nav>
            <ul>
            {/* <Link to="/">First</Link>
            <Link to="exampledataview">Second</Link> */}
            <li><a href="#">Java</a></li>
            <li><a href="#">C++</a></li>
            <li><a href="#">Python</a></li>
            </ul>
    
            </nav>    
            
          </div>
        </>
      );
}

export default Navigation
import "./Navigation.css";
import {Link} from "react-router-dom";

function Navigation() {
    return (
        <>
          <div className="navigation">
            <nav>
            <ul>
            <li><Link to="/">Java</Link></li>
            <li><Link to="cpp">C++</Link></li>
            <li><Link to="python">Python</Link></li>
            {/* <li><a href="#">Java</a></li>
            <li><a href="#">C++</a></li>
            <li><a href="#">Python</a></li> */}
            </ul>
    
            </nav>    
            
          </div>
        </>
      );
}

export default Navigation
import "./Header.css";
import {Link} from "react-router-dom";

function Header() {
    return (
        <>
          <div className="header">
            
            <div className="headerRight">
              <Link to="home">Home</Link>
              <Link to="contact">Contact</Link>
              <Link to="about">About</Link>
            </div>
            <a href="#default" className="logo">
              CompanyLogo
            </a>
          </div>
        </>
      );
}

export default Header;
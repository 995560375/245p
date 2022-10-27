import "./Header.css";

function Header() {
    return (
        
          <div className="header">
            
            <div className="headerRight">
              <a className="active" href="#home">
                Home
              </a>
              <a href="#contact">Contact</a>
              <a href="#about">About</a>
            </div>
            <a href="#default" className="logo">
              CompanyLogo
            </a>
          </div>
        
      );
}

export default Header;
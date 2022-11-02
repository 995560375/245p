import "./Sidebar.css";
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <>
          <div className="sidebar">
            <div class="sidenav">
              <Link to="/">BC</Link>
              <Link to="exampledataview">GR</Link>
            </div>
          </div>
        </>
      );
}

export default Sidebar;
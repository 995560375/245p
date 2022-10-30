import "./Sidebar.css";
import {Link} from "react-router-dom";

function Sidebar() {
    return (
        <>
          <div className="sidebar">
            <div class="sidenav">
              <Link to="/">First</Link>
              <Link to="exampledataview">Second</Link>
            </div>
          </div>
        </>
      );
}

export default Sidebar;
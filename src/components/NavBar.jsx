import './NavBar.css'
import { Outlet, Link } from "react-router-dom";

function NavBar() {

  return (
    <div className="NavBar">
      <nav>
        <ul>
          <li className="home-link" key="home-button">
            <Link to="/">
              <h3>ProductivityHub</h3>
            </Link>
          </li>
          <li className="gallery-link" key="gallery-button">
            <Link to="/create-new-post">
              Create New Post
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default NavBar;
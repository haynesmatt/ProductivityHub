import './NavBar.css'
import { Outlet, Link } from "react-router-dom";
import { useState } from 'react';

function NavBar() {

  const [searchQuery, setSearchQuery] = useState("");

  // const filterComponents = (query, components) => {
  //   return components.filter((component) =>
  //     component.text.toLowerCase().includes(query.toLowerCase())
  //   );
  // };

  // const filteredComponents = filterComponents(searchQuery, components);

  return (
    <div className="NavBar">
      <nav>
        <ul>

          <li className="home-link" key="home-button">
            <Link to="/">
              <h3>ProductivityHub</h3>
            </Link>
          </li>

          <li>
          <form className="title-form">
            <input type="text" placeholder="Search posts..." value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
            {/* {filteredComponents.map((component) => (
              <MyComponent key={component.id} text={component.text} />
            ))} */}
          </form>
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
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="navbar">
      <div className="logo">Rajesh Website</div>
      <ul>
        <NavLink to="/" activeClassName="active">
          <li>Home</li>
        </NavLink>

        <NavLink to="/products">
          <li>Products</li>
        </NavLink>

        <NavLink to="/about">
          <li>About</li>
        </NavLink>
        <NavLink to="/contacts">
          <li>Contacts</li>
        </NavLink>
        <NavLink to="/users">
          <li>Users</li>
        </NavLink>
      </ul>
      <button onClick={() => navigate("login", { replace: true })}>
        Login
      </button>
    </div>
  );
};

export default Navbar;

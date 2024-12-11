import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">Rajesh Website</div>
      <ul>
        <Link to="/">
          <li>Home</li>
        </Link>

        <Link to="/products">
          <li>Products</li>
        </Link>

        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/contacts">
          <li>Contacts</li>
        </Link>
      </ul>
      <button>Login</button>
    </div>
  );
};

export default Navbar;

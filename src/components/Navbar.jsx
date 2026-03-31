import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      padding: "15px",
      background: "#2c3e50",
      display: "flex",
      gap: "15px"
    }}>
      <Link to="/">Home</Link>
      <Link to="/products">Products</Link>
      <Link to="/about">About</Link>
      <Link to="/cart">Cart</Link>
      <Link to="/orders">Orders</Link>
      <Link to="/login">Login</Link>
      <Link to="/contact">Contact</Link>
    </nav>
  );
};

export default Navbar;

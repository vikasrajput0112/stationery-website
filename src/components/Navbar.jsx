import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{ padding: "10px", background: "#333" }}>
      <Link to="/" style={{ margin: "10px", color: "#fff" }}>Home</Link>
      <Link to="/products" style={{ margin: "10px", color: "#fff" }}>Products</Link>
      <Link to="/contact" style={{ margin: "10px", color: "#fff" }}>Contact</Link>
    </nav>
  );
};

export default Navbar;

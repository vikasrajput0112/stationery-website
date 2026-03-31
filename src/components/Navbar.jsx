import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav style={{
      background: "#1e293b",   // dark blue-gray
      padding: "15px 30px",
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      boxShadow: "0 2px 8px rgba(0,0,0,0.2)"
    }}>

      {/* Logo */}
      <h2 style={{ color: "#fff", margin: 0 }}>
        🛍️ Stationery Store
      </h2>

      {/* Links */}
      <div style={{ display: "flex", gap: "20px" }}>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/products">Products</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/cart">Cart</NavLink>
        <NavLink to="/orders">Orders</NavLink>
        <NavLink to="/login">Login</NavLink>
        <NavLink to="/contact">Contact</NavLink>
      </div>

    </nav>
  );
};

// 🔹 Reusable Link Component
const NavLink = ({ to, children }) => {
  return (
    <Link
      to={to}
      style={{
        color: "#f1f5f9",   // light color (visible)
        textDecoration: "none",
        fontWeight: "500",
        transition: "0.3s"
      }}
      onMouseOver={e => e.target.style.color = "#38bdf8"}
      onMouseOut={e => e.target.style.color = "#f1f5f9"}
    >
      {children}
    </Link>
  );
};

export default Navbar;

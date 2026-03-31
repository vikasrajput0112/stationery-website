import React from "react";

const Cart = () => {
  return (
    <div style={{ padding: "40px" }}>
      <h1>🛒 Your Cart</h1>

      <p>No items added yet.</p>

      <button style={{
        padding: "10px",
        background: "#3498db",
        color: "#fff",
        border: "none",
        borderRadius: "5px"
      }}>
        Checkout
      </button>
    </div>
  );
};

export default Cart;

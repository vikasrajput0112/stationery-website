import React from "react";

const Products = () => {
  const items = ["Pen", "Notebook", "Pencil", "Marker", "Stapler"];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Our Products</h1>
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default Products;

import React, { useState } from "react";

const Products = () => {

  const items = [
    {
      name: "Pen",
      price: "₹10",
      brands: ["Camlin", "Reynolds", "Flair", "DOMS", "Saino"]
    },
    {
      name: "Notebook",
      price: "₹50",
      brands: ["Classmate", "Navneet", "Camlin"]
    },
    {
      name: "Pencil",
      price: "₹5",
      brands: ["DOMS", "Camlin", "Natraj", "Faber-Castell", "Blue & Black"]
    },
    {
      name: "Marker",
      price: "₹30",
      brands: ["Camlin", "Artline", "Luxor"]
    },
    {
      name: "Stapler",
      price: "₹120",
      brands: ["Kangaroo", "Camlin", "Kores"]
    }
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        🛍️ Our Products
      </h1>

      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        
        {items.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}

      </div>

      <p style={{
        textAlign: "center",
        marginTop: "40px",
        color: "#777"
      }}>
        🚚 Free delivery on orders above ₹100
      </p>

    </div>
  );
};

// 🔹 Separate Component (clean code)
const ProductCard = ({ item }) => {
  const [selectedBrand, setSelectedBrand] = useState("");

  return (
    <div style={{
      border: "1px solid #ddd",
      borderRadius: "10px",
      width: "220px",
      padding: "20px",
      textAlign: "center",
      boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
    }}>
      
      <div style={{ fontSize: "40px", marginBottom: "10px" }}>
        📦
      </div>

      <h3>{item.name}</h3>

      <p style={{ color: "#27ae60", fontWeight: "bold" }}>
        {item.price}
      </p>

      {/* 🔽 Dropdown */}
      <select
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "5px"
        }}
      >
        <option value="">Select Brand</option>
        {item.brands.map((brand, i) => (
          <option key={i} value={brand}>
            {brand}
          </option>
        ))}
      </select>

      {/* Show selected brand */}
      {selectedBrand && (
        <p style={{ fontSize: "12px", color: "#555" }}>
          Selected: {selectedBrand}
        </p>
      )}

      <button style={{
        padding: "10px 15px",
        backgroundColor: "#3498db",
        color: "#fff",
        border: "none",
        borderRadius: "5px",
        cursor: "pointer"
      }}>
        Add to Cart
      </button>

    </div>
  );
};

export default Products;

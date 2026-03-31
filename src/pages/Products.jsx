import React, { useState } from "react";

const Products = () => {

  const items = [
    { name: "Pen", price: "₹10", brands: ["Camlin", "Reynolds", "Flair", "DOMS", "Saino"] },
    { name: "Notebook", price: "₹50", brands: ["Classmate", "Navneet", "Camlin"] },
    { name: "Pencil", price: "₹5", brands: ["DOMS", "Camlin", "Natraj", "Faber-Castell"] },
    { name: "Marker", price: "₹30", brands: ["Camlin", "Artline", "Luxor"] },
    { name: "Stapler", price: "₹120", brands: ["Kangaroo", "Camlin", "Kores"] }
  ];

  return (
    <div style={{
      padding: "40px",
      fontFamily: "Segoe UI, sans-serif",
      background: "#f4f6f9"
    }}>

      <h1 style={{
        textAlign: "center",
        marginBottom: "40px",
        fontSize: "32px"
      }}>
        🛍️ Our Products
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "25px"
      }}>
        {items.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}
      </div>

    </div>
  );
};

// 🔹 Product Card
const ProductCard = ({ item }) => {
  const [selectedBrand, setSelectedBrand] = useState("");

  return (
    <div style={{
      background: "#fff",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      transition: "0.3s"
    }}
    onMouseOver={e => e.currentTarget.style.transform = "translateY(-5px)"}
    onMouseOut={e => e.currentTarget.style.transform = "translateY(0)"}
    >

      {/* Product Info */}
      <div style={{ textAlign: "center" }}>
        <div style={{ fontSize: "40px", marginBottom: "10px" }}>📦</div>
        <h3>{item.name}</h3>
        <p style={{ color: "#27ae60", fontWeight: "bold" }}>{item.price}</p>
      </div>

      {/* 🔥 Brand Cards */}
      <div style={{
        marginTop: "15px",
        display: "flex",
        flexWrap: "wrap",
        gap: "8px",
        justifyContent: "center"
      }}>
        {item.brands.map((brand, i) => (
          <div
            key={i}
            onClick={() => setSelectedBrand(brand)}
            style={{
              padding: "6px 10px",
              borderRadius: "20px",
              border: selectedBrand === brand ? "2px solid #3498db" : "1px solid #ccc",
              background: selectedBrand === brand ? "#ecf5ff" : "#fff",
              cursor: "pointer",
              fontSize: "12px",
              transition: "0.2s"
            }}
          >
            {brand}
          </div>
        ))}
      </div>

      {/* Selected Brand */}
      {selectedBrand && (
        <p style={{
          textAlign: "center",
          marginTop: "10px",
          fontSize: "12px",
          color: "#555"
        }}>
          Selected: {selectedBrand}
        </p>
      )}

      {/* Button */}
      <button style={{
        marginTop: "15px",
        width: "100%",
        padding: "10px",
        background: "#3498db",
        color: "#fff",
        border: "none",
        borderRadius: "6px",
        cursor: "pointer"
      }}>
        Add to Cart
      </button>

    </div>
  );
};

export default Products;

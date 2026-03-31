import React, { useState } from "react";

const Products = () => {

  const items = [
    { name: "Pen", price: "₹10", brands: ["Camlin", "Reynolds", "Flair", "DOMS", "Saino"] },
    { name: "Notebook", price: "₹50", brands: ["Classmate", "Navneet", "Camlin"] },
    { name: "Pencil", price: "₹5", brands: ["DOMS", "Camlin", "Natraj", "Faber-Castell"] },
    { name: "Marker", price: "₹30", brands: ["Camlin", "Artline", "Luxor"] },
    { name: "Stapler", price: "₹120", brands: ["Kangaroo", "Camlin", "Kores"] },

    { name: "Bag", price: "₹800", brands: ["Skybags", "Wildcraft", "American Tourister"] },
    { name: "Laptop", price: "₹50,000", brands: ["HP", "Dell", "Lenovo"] },
    { name: "Shoes", price: "₹1500", brands: ["Nike", "Adidas", "Puma"] },
    { name: "Eraser", price: "₹5", brands: ["Natraj", "Apsara"] },
    { name: "Sharpener", price: "₹10", brands: ["Natraj", "DOMS"] },

    { name: "Highlighter", price: "₹40", brands: ["Faber-Castell", "Camlin"] },
    { name: "Glue", price: "₹25", brands: ["Fevicol", "Camlin"] },
    { name: "Scale", price: "₹20", brands: ["Natraj", "Camlin"] },
    { name: "Compass Box", price: "₹120", brands: ["Camlin", "DOMS"] },
    { name: "Water Bottle", price: "₹200", brands: ["Milton", "Cello"] },

    { name: "Lunch Box", price: "₹300", brands: ["Milton", "Cello"] },
    { name: "Calculator", price: "₹500", brands: ["Casio", "Orpat"] },
    { name: "File Folder", price: "₹60", brands: ["Solo", "Kangaroo"] },
    { name: "Sticky Notes", price: "₹30", brands: ["3M", "Solo"] },
    { name: "Whiteboard", price: "₹700", brands: ["Camlin", "Luxor"] }
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Segoe UI, sans-serif", background: "#f5f7fa" }}>
      
      <h1 style={{ textAlign: "center", marginBottom: "40px", fontSize: "32px" }}>
        🛍️ Explore Our Products
      </h1>

      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
        gap: "25px"
      }}>
        
        {items.map((item, index) => (
          <ProductCard key={index} item={item} />
        ))}

      </div>

    </div>
  );
};

// 🔹 Product Card Component
const ProductCard = ({ item }) => {
  const [selectedBrand, setSelectedBrand] = useState("");

  return (
    <div style={{
      background: "#fff",
      borderRadius: "12px",
      padding: "20px",
      boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
      transition: "0.3s",
      textAlign: "center"
    }}
    onMouseOver={e => e.currentTarget.style.transform = "scale(1.03)"}
    onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
    >

      <div style={{ fontSize: "40px", marginBottom: "10px" }}>📦</div>

      <h3 style={{ marginBottom: "5px" }}>{item.name}</h3>

      <p style={{ color: "#27ae60", fontWeight: "bold", marginBottom: "10px" }}>
        {item.price}
      </p>

      {/* Dropdown */}
      <select
        value={selectedBrand}
        onChange={(e) => setSelectedBrand(e.target.value)}
        style={{
          width: "100%",
          padding: "8px",
          marginBottom: "10px",
          borderRadius: "6px",
          border: "1px solid #ccc"
        }}
      >
        <option value="">Select Brand</option>
        {item.brands.map((brand, i) => (
          <option key={i}>{brand}</option>
        ))}
      </select>

      {selectedBrand && (
        <p style={{ fontSize: "12px", color: "#666" }}>
          Selected: {selectedBrand}
        </p>
      )}

      <button style={{
        marginTop: "10px",
        padding: "10px",
        width: "100%",
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

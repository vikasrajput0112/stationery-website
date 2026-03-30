import React from "react";

const Home = () => {
  return (
    <div style={{ fontFamily: "Arial, sans-serif" }}>
      
      {/* 🔹 Hero Section */}
      <div style={{
        background: "linear-gradient(to right, #4facfe, #00f2fe)",
        color: "#fff",
        padding: "60px 20px",
        textAlign: "center"
      }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          🛒 Stationery Store
        </h1>
        <p style={{ fontSize: "18px" }}>
          Everything you need for school & office
        </p>
        <button style={{
          marginTop: "20px",
          padding: "10px 20px",
          background: "#fff",
          color: "#333",
          border: "none",
          cursor: "pointer",
          fontWeight: "bold",
          borderRadius: "5px"
        }}>
          Shop Now
        </button>
      </div>

      {/* 🔹 Featured Products */}
      <div style={{ padding: "40px 20px", textAlign: "center" }}>
        <h2 style={{ marginBottom: "30px" }}>📦 Featured Products</h2>

        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "20px",
          flexWrap: "wrap"
        }}>
          
          {["Pen", "Notebook", "Marker", "Stapler"].map((item, index) => (
            <div key={index} style={{
              border: "1px solid #ddd",
              padding: "20px",
              width: "200px",
              borderRadius: "10px",
              boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
            }}>
              <h3>{item}</h3>
              <p>High quality {item}</p>
              <button style={{
                padding: "8px 15px",
                background: "#3498db",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer"
              }}>
                Buy Now
              </button>
            </div>
          ))}

        </div>
      </div>

      {/* 🔹 Footer */}
      <div style={{
        background: "#333",
        color: "#fff",
        padding: "15px",
        textAlign: "center"
      }}>
        <p>© 2026 Stationery Store | All Rights Reserved</p>
      </div>

    </div>
  );
};

export default Home;

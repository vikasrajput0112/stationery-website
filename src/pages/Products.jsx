import React from "react";

const Products = () => {
  const items = [
    { name: "Pen", price: "₹10" },
    { name: "Notebook", price: "₹50" },
    { name: "Pencil", price: "₹5" },
    { name: "Marker", price: "₹30" },
    { name: "Stapler", price: "₹120" }
  ];

  return (
    <div style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      
      {/* 🔹 Heading */}
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        🛍️ Our Products
      </h1>

      {/* 🔹 Product Grid */}
      <div style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        flexWrap: "wrap"
      }}>
        
        {items.map((item, index) => (
          <div key={index} style={{
            border: "1px solid #ddd",
            borderRadius: "10px",
            width: "220px",
            padding: "20px",
            textAlign: "center",
            boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
            transition: "0.3s"
          }}>
            
            {/* Product Icon */}
            <div style={{ fontSize: "40px", marginBottom: "10px" }}>
              📦
            </div>

            {/* Product Name */}
            <h3>{item.name}</h3>

            {/* Price */}
            <p style={{ color: "#27ae60", fontWeight: "bold" }}>
              {item.price}
            </p>

            {/* Button */}
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
        ))}

      </div>

      {/* 🔹 Footer Note */}
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

export default Products;

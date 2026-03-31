import React from "react";

const Contact = () => {
  return (
    <div style={{ 
      padding: "40px", 
      fontFamily: "Arial, sans-serif",
      backgroundColor: "#f9f9f9",
      minHeight: "100vh"
    }}>

      {/* 🔹 Heading */}
      <h1 style={{ textAlign: "center", marginBottom: "30px" }}>
        📞 Contact Us
      </h1>

      {/* 🔹 Container */}
      <div style={{
        maxWidth: "600px",
        margin: "auto",
        background: "#fff",
        padding: "30px",
        borderRadius: "10px",
        boxShadow: "0 4px 10px rgba(0,0,0,0.1)"
      }}>

        {/* Contact Info */}
        <div style={{ marginBottom: "20px" }}>
          <p><strong>Email:</strong> support@stationery.com</p>
          <p><strong>Phone:</strong> +91-99775-67890</p>
          <p><strong>Address:</strong> Ghaziabad, India</p>
        </div>

        {/* 🔹 Form */}
        <form>
          <input 
            type="text" 
            placeholder="Your Name" 
            style={inputStyle}
          />

          <input 
            type="email" 
            placeholder="Your Email" 
            style={inputStyle}
          />

          <textarea 
            placeholder="Your Message" 
            rows="4"
            style={inputStyle}
          ></textarea>

          <button style={buttonStyle}>
            Send Message
          </button>
        </form>
      </div>

    </div>
  );
};

// 🔹 Reusable Styles
const inputStyle = {
  width: "100%",
  padding: "10px",
  marginBottom: "15px",
  border: "1px solid #ccc",
  borderRadius: "5px"
};

const buttonStyle = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#3498db",
  color: "#fff",
  border: "none",
  borderRadius: "5px",
  cursor: "pointer",
  fontSize: "16px"
};

export default Contact;

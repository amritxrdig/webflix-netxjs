import React from "react";

export default function SimpleLoader() {
  const spinnerContainerStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "40vh",
  };

  const spinnerStyle = {
    width: "30px",
    height: "30px",
    border: "3px solid #f3f3f3",
    borderTop: "3px solid #3498db",
    borderRadius: "50%",
    animation: "spin 1s linear infinite",
  };

  return (
    <div style={spinnerContainerStyle}>
      <div style={spinnerStyle} className="spinner" />
    </div>
  );
}

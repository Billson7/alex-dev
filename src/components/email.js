import React from "react"
import "../App.css"

export const Email = () => (
  <div className="email">
    <a
      id="email"
      style={{
        textDecoration: "none",
        backgroundColor: "#FFC30B",
        borderRadius: "4px",
        padding: "10px",
        maxWidth: "fitContent",
      }}
      href="mailto:alexbillson90@gmail.com"
    >
      <b>LETS GET IN TOUCH</b>
    </a>
  </div>
)

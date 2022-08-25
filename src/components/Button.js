import React from "react";

function Button({ text, click }) {
  return (
    <button
      style={{
        color: "white",
        backgroundColor: "black",
        width: 150,
        height: 50,
      }}
      onClick={click}
    >
      {text}
    </button>
  );
}

export default Button;

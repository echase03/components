import React from "react";
import Button from "../components/Button";

function Home() {
  return (
    <div>
      <h3>Component Practice</h3>
      <button
        style={{
          color: "white",
          backgroundColor: "black",
          width: 150,
          height: 50,
        }}
        onClick={() => {
          console.log("hello there!");
        }}
      >
        hello there
      </button>
      <Button text="hey there" click={() => console.log("hey there!")} />
      <Button text="bonjour" click={() => console.log("bonjour!")} />
      <Button text="ciao" click={() => console.log("ciao!")} />
    </div>
  );
}

export default Home;

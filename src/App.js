import React from "react";

function App(props) {
  const myStyle = {
    color: "blue",
    backgroundColor: "gold",
    fontSize: "70px",
    textAlign: "center",
  }; // js object
  return (
    <>
      <div style={myStyle}>Lorem ipsum dolor.</div>
      <hr />
      <div
        style={{ color: "red", backgroundColor: "yellow", fontSize: "30px" }}
      >
        Lorem ipsum dolor.
      </div>
    </>
  );
}

export default App;

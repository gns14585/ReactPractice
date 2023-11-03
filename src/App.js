import React from "react";

function App(props) {
  const name = "흥민";
  return (
    <div>
      <h1>이름은 {name}</h1>
      <h1>이름은 {"강인"}</h1>
      <h1>이름은 희찬</h1>

      <div className={"error"}>Lorem ipsum dolor.</div>
      <div className="error">Lorem ipsum dolor.</div>
    </div>
  );
}

export default App;

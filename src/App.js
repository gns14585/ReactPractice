import React, { useState } from "react";

function App(props) {
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  function handleNumber1(e) {
    setNumber1(Number(e.target.value));
  }
  function handleNumber2(e) {
    setNumber2(Number(e.target.value));
  }
  let result = number1 + number2;
  return (
    <>
      <input type="number" onChange={handleNumber1} /> +
      <input type="number" onChange={handleNumber2} /> = {result}
    </>
  );
}

export default App;

import React, { useState } from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const [number, setNumber] = useState(0);

  function handleButtonClickUp() {
    setNumber(number + 1);
  }

  function handleButtonClickDown() {
    setNumber(number - 1);
  }

  return (
    <>
      <h1>{number}</h1>
      <Button onClick={handleButtonClickUp}>증가</Button>
      <Button onClick={handleButtonClickDown}>감소</Button>
    </>
  );
}

export default App;

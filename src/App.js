import React from "react";
import { Button } from "@chakra-ui/react";

function App(props) {
  const func1 = () => {
    console.log("first");
  };
  return (
    <div>
      <Button onClick={func1}>Lorem.</Button>
      <Button
        onClick={() => {
          console.log("second");
        }}
      >
        Nesciunt?
      </Button>
    </div>
  );
}

export default App;

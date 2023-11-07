import React, { createContext, useContext, useState } from "react";
import { Button, Input, Text } from "@chakra-ui/react";

function CComp() {
  const text = useContext(TextContext);
  return <Text>{text}</Text>;
}

function BComp() {
  return <CComp />;
}

function AComp() {
  return <BComp />;
}

function App(props) {
  const [text, setText] = useState("");
  return (
    <div>
      <Input onChange={(e) => setText(e.target.value)} />
      <TextContext.Provider value={text}>
        <AComp />
      </TextContext.Provider>
    </div>
  );
}

const TextContext = createContext(null);

export default App;

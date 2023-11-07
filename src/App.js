import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function CComp() {
  const message = useContext(MessageContext);
  return <Text>받은 메세지 : {message}</Text>;
}

function BComp() {
  return <CComp />;
}

function AComp() {
  return <BComp />;
}

function App(props) {
  const [message, setMessage] = useState("기존 메세지");
  return (
    <div>
      <Button onClick={() => setMessage("변경된 메세지")}>메세지 바꾸기</Button>
      <MessageContext.Provider value={message}>
        <AComp />
      </MessageContext.Provider>
    </div>
  );
}

const MessageContext = createContext(null);

export default App;

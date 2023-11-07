import React, { createContext, useContext, useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function AComp() {
  const { setMessage } = useContext(MessageContext);
  return (
    <Button onClick={() => setMessage("변경된 메세지")}>메세지 변경하기</Button>
  );
}

function BComp() {
  const { message } = useContext(MessageContext);
  return <Text>{message}</Text>;
}

function App(props) {
  const [message, setMessage] = useState("초기메세지");

  return (
    <div>
      <MessageContext.Provider value={{ message, setMessage }}>
        <AComp />
        <BComp />
      </MessageContext.Provider>
    </div>
  );
}

const MessageContext = createContext(null);

export default App;

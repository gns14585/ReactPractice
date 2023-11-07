import React, { createContext, useState } from "react";
import { AComp } from "./AComp";
import { BComp } from "./BComp";

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

export const MessageContext = createContext(null);

export default App;

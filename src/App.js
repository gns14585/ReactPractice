import React, { useState } from "react";
import { Input, Text } from "@chakra-ui/react";

function CComp({ message }) {
  // 자식
  return <Text>{message}</Text>;
}

function AComp({ message }) {
  // 부모
  // 부모
  return <CComp message={message} />;
}

function DComp({ message, onChange }) {
  // 자식
  return <Input value={message} onChange={(e) => onChange(e.target.value)} />;
}

function BComp({ value, onChange }) {
  // 부모
  return <DComp value={value} onChange={onChange} />;
}

function App(props) {
  const [message, setMessage] = useState("");
  return (
    <div>
      <AComp message={message} />
      <BComp value={message} onChange={(e) => setMessage(e)} />
    </div>
  );
}

export default App;

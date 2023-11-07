import React, { useState } from "react";
import { Button, Text } from "@chakra-ui/react";

function ChildComp({ onClick }) {
  // 자식
  return <Button onClick={onClick}>클릭</Button>;
}

function SomeComp({ onClick }) {
  // 부모
  return <ChildComp onClick={onClick} />;
}

function OtherChildComp({ message }) {
  // 자식
  return <Text>{message}</Text>;
}

function OtherComp({ message }) {
  // 부모
  return <OtherChildComp message={message} />;
}

function App(props) {
  const [message, setMessage] = useState("안녕");

  return (
    <div>
      <SomeComp onClick={() => setMessage("다른메세지")} />
      <OtherComp message={message} />
    </div>
  );
}

export default App;

import React, { useState } from "react";
import { Box, Button, Text } from "@chakra-ui/react";

function MyComp1({ setMessage }) {
  return (
    <Box>
      <Button onClick={() => setMessage("안녕하세요")}>텍스트 바꾸기</Button>
    </Box>
  );
}

function MyComp2({ message }) {
  return (
    <Box>
      <Text>{message}</Text>
    </Box>
  );
}

function App(props) {
  const [message, setMessage] = useState("hello");
  return (
    <div>
      <MyComp1 setMessage={setMessage}></MyComp1>
      <MyComp2 message={message}></MyComp2>
    </div>
  );
}

export default App;

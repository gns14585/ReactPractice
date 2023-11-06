import React, { useState } from "react";
import { Box, Input, Text } from "@chakra-ui/react";

function App(props) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  function handleNameChange(e) {
    setUsername(e.target.value);
  }

  function handleEmailChange(e) {
    setEmail(e.target.value);
  }

  return (
    <div>
      <Box>
        <Input type="text" value={username} onChange={handleNameChange} />
      </Box>
      <Box>
        <Input type="text" value={email} onChange={handleEmailChange} />
      </Box>
      <Text>
        {username}의 email은 {email}
        주소는 {address} 입니다.
      </Text>

      <Box>
        <Input
          text="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </Box>
    </div>
  );
}

export default App;

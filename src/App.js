import React, { useState } from "react";
import { Box, Button, Input, ListItem, UnorderedList } from "@chakra-ui/react";

function App(props) {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleButtonClick(e) {
    setItems(e.target.value);
  }

  function handleRemoveButtonClick(index) {}

  return (
    <div>
      <Box>
        <Input value={text} onChange={(e) => setText(e.target.value)}></Input>
        <Button onClick={handleButtonClick}>추가</Button>
      </Box>

      <Box>
        <UnorderedList>
          {items.map((item, index) => (
            <ListItem key={index}>
              {item}
              <Button
                colorScheme="red"
                onClick={() => handleRemoveButtonClick(index)}
              >
                지우기
              </Button>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
    </div>
  );
}

export default App;

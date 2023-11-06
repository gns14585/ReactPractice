import React, { useState } from "react";
import { Box, Button, Input, ListItem, UnorderedList } from "@chakra-ui/react";

function App(props) {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);

  function handleButtonClick() {
    // const newItem = [...items];
    // newItem.push(text);
    // setItems(newItem);

    setItems([...items, text]);
  }

  function handleRemoveButtonClick(index) {
    setItems(items.filter((item, i) => i != index));
  }

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

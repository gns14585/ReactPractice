import React, { useEffect, useState } from "react";
import { Box, Button, Checkbox, Text } from "@chakra-ui/react";

function MyComp({ color }) {
  const [number, setNumber] = useState(0);

  useEffect(() => {
    console.log(color + " : initial render");
  }, []);

  console.log(color + " : re render");

  return (
    <Box borderWidth={"10px"} borderColor={color}>
      <Button onClick={() => setNumber(number + 1)}>증가</Button>
      <Text>{number}</Text>
    </Box>
  );
}

function App(props) {
  const [number, setNumber] = useState(0);
  const [secondToggle, setSecondToggle] = useState(true);
  const [gold, setGold] = useState(true);

  console.log("부모 re-render");

  return (
    <div>
      <Box>
        <Text>부모</Text>
        <Button onClick={() => setNumber(number + 1)}>증가</Button>
        <Text>{number}</Text>
        <Checkbox
          defaultChecked={true}
          onChange={(e) => setSecondToggle(e.target.checked)}
        >
          파란 박스 토글
        </Checkbox>
        <Checkbox
          defaultChecked={true}
          onChange={(e) => setGold(e.target.checked)}
        >
          골드 박스 토글
        </Checkbox>
      </Box>
      <Box mt={5}>
        <Text>자식</Text>
        <MyComp color={"red"} />
        {secondToggle && <MyComp color={"blue"} />}

        <Box sx={{ display: gold ? "block" : "none" }}>
          <MyComp color={"gold"} />
        </Box>
      </Box>
    </div>
  );
}

export default App;

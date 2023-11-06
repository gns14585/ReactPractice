import React from "react";
import { List, ListItem } from "@chakra-ui/react";

function App(props) {
  const arr = ["pizza", "돈까스", "햄버거", "김치찌개"];
  const arr2 = ["손흥민", "이강인", "김민재"];
  const arr3 = ["라떼", "에스프레소", "카푸치노"];
  const arr4 = [
    { id: 0, name: "라떼" },
    { id: 1, name: "에스프레소" },
    { id: 2, name: "카푸치노" },
  ];

  const listItems = arr.map((item, index) => (
    <ListItem key={index}>{item}</ListItem>
  ));

  return (
    <div>
      <List mb={3}>{listItems}</List>
      <List mb={3}>
        {arr2.map((item2, index) => (
          <ListItem key={index}>{item2}</ListItem>
        ))}
      </List>
      <List mb={3}>
        {arr3.map((item3, i) => (
          <ListItem key={i}>{item3}</ListItem>
        ))}
      </List>
    </div>
  );
}

export default App;

import React from "react";
import {
  MyBox,
  MyContainer,
  MyElem,
  name,
  person,
  address,
} from "./component/MyBox";

function App(props) {
  console.log("name", name);
  console.log("address", address);
  console.log("person", person);
  return (
    <div>
      <MyBox />
      <MyElem />
      <MyContainer />
    </div>
  );
}

export default App;

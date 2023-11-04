import React from "react";
import MyBox, { address } from "./component/MyBox";
import MyElem, { address as myAddress } from "./component/MyElem";
// as로 named export 값을 import 할 때 별칭을 줄 수 있음
function App() {
  return (
    <div>
      <h1>{address}</h1>
      <h1>{myAddress}</h1>
      <MyElem />
      <MyBox />
    </div>
  );
}

export default App;

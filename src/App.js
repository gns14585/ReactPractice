import React from "react";

function App(props) {
  return (
    <div>
      <MyComp value="흥민" address="신촌" />
      <MyComp value="강인" address="강남" />
    </div>
  );
}

function MyComp({ value, address }) {
  return (
    <div>
      <h1>
        {value}은 {address}에 산다
      </h1>
    </div>
  );
}

export default App;

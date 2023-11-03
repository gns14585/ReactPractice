import React from "react";

function App() {
  return (
    <div>
      <MyComp name="흥민" address="신촌" age={33} city="서울" />
      <MyComp address="신촌" age={33} city="서울" />
      <MyComp address="런던" city="영국" />
      <MyComp name="희찬" age={66} city="파리" address="프랑스" />
    </div>
  );
}

function MyComp({ name = "강인", address, city, age = 100 }) {
  return (
    <div>
      <p>
        {name} 은 {age}세 이고 {address}, {city}에 산다
      </p>
    </div>
  );
}

export default App;

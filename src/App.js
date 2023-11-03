function MyElem({ name, age, team }) {
  return (
    <div>
      <ul>
        <li>이름 : {name}</li>
        <li>나이 : {age}</li>
        <li>소속 : {team}</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyElem name="흥민" age={44} team="토트넘" />
      <MyElem name="강인" age={33} team="파리" />
    </div>
  );
}

export default App;

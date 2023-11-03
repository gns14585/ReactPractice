function App() {
  return (
    <div>
      <h1>hello react</h1>
      <h2>Hi React</h2>
      <MyComp />
      <MyComp2 />
    </div>
  );
}
function MyComp() {
  return (
    <div>
      <h1>HI COMPONENT</h1>
    </div>
  );
}
function MyComp2() {
  let name = "손흥민";
  let age = 33;
  return (
    <div>
      <h1>hello react</h1>
      <h1>hello {name}</h1>
      <h1>{age} years</h1>
      <h1>{age * 2} double years</h1>
      <h1>{name + "선수"}</h1>
    </div>
  );
}

export default App;

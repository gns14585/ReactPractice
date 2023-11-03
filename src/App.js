function MyComp({
  text = "hello react",
  m = "30px",
  p = "10px",
  color = "blue",
  bg = "red",
}) {
  return (
    <div style={{ margin: m, padding: p, color: color, backgroundColor: bg }}>
      <h1>{text}</h1>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyComp m="30px" p="10px" color="gold" bg="black" text="hello react" />
      <MyComp m="30px" p="10px" color="gold" bg="black" />
      <MyComp m="30px" bg="black" text="hello react" />
      <MyComp p="10px" color="gold" text="hello react" />
    </div>
  );
}

export default App;

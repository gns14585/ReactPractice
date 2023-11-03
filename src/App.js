function App() {
  return (
    <div>
      <MyHeader color="white" bg="black" text="내가 만든 제목" />
      <MyHeader color="orange" bg="skyblue" text="다시 만든 제목" />
    </div>
  );
}

function MyHeader(props) {
  return (
    <div style={{ color: props.color, backgroundColor: props.bg }}>
      <h1>{props.text}</h1>
    </div>
  );
}

export default App;

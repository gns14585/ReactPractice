function App() {
  return (
    <div>
      <MyBox
        p="10px"
        m="10px"
        color="blue"
        bg="gold"
        text="안녕하세요 이정훈입니다."
      />
    </div>
  );
}

function MyBox({ p, m, color, text, bg }) {
  return (
    <div style={{ padding: p, margin: m, color: color, backgroundColor: bg }}>
      <h1>{text}</h1>
    </div>
  );
}

export default App;

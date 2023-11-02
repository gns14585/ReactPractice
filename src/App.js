function MyComponent1() {
  return (
    <div style={{ width: "100%", height: "40%" }}>
      <img
        style={{ width: "50%" }}
        src="https://i.imgur.com/SuL4x4v.jpeg"
        alt="경복궁"
      />
    </div>
  );
}

function App() {
  return (
    <div>
      <MyComponent1 />
      <MyComponent1 />
      <MyComponent1 />
    </div>
  );
}

export default App;

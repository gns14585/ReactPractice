function MyComponent1() {
  return (
    <div>
      <h1>Hello Component</h1>
    </div>
  );
}

function MyComponent2() {
  return (
    <div>
      <p>Lorem ipsum dolor.</p>
      <ul>
        <li>Lorem.</li>
        <li>Lorem.</li>
        <li>Lorem.</li>
      </ul>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyComponent1 />
      <MyComponent2 />
    </div>
  );
}

export default App;

import { Button } from "@chakra-ui/react";

function MyButton({ executeClick, children }) {
  return (
    <div>
      <Button onClick={executeClick}>{children}</Button>
    </div>
  );
}

function App(props) {
  const func1() {
    console.log("hello")
  }
  return (
    <div>
      <MyButton executeClick={func1} >hello</MyButton>
      <MyButton>greeting</MyButton>
    </div>
  );
}

export default App;

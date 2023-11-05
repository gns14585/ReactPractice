import { Button } from "@chakra-ui/react";

function MyButton({ executeClick, children }) {
  return (
    <div>
      <Button onClick={executeClick}>{children}</Button>
    </div>
  );
}

function App(props) {
  function func1() {
    console.log("hello");
  }
  function func2() {
    console.log("greeting");
  }
  return (
    <div>
      <MyButton executeClick={func1}>hello</MyButton>
      <MyButton executeClick={func2}>greeting</MyButton>
    </div>
  );
}

export default App;

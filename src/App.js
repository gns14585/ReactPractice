import { Button } from "@chakra-ui/react";

function MyComp({ children, executeClick }) {
  return <Button onClick={executeClick}>{children}</Button>;
}
function App(props) {
  function func1() {
    console.log("func1 실행");
  }

  let func2 = () => {
    console.log("arrow function 실행1");
  };

  return (
    <div>
      <MyComp executeClick={func1}>Button1</MyComp>
      <MyComp executeClick={func2}>Button2</MyComp>
      <MyComp
        executeClick={() => {
          console.log("arrow function 실행222");
        }}
      >
        Button3
      </MyComp>
      <MyComp executeClick={() => console.log("arrow function 실행 444")}>
        Button4
      </MyComp>
    </div>
  );
}

export default App;

import { Card, CardBody } from "@chakra-ui/react";

function MyBox({ color, bg, children }) {
  return (
    <>
      <Card color={color} bg={bg}>
        <CardBody>{children}</CardBody>
      </Card>
    </>
  );
}
function App() {
  return (
    <div>
      <MyBox color="blue" bg="red">
        안녕하세요
      </MyBox>
    </div>
  );
}

export default App;

import * as PropTypes from "prop-types";
import { Button } from "@chakra-ui/react";

function MyLink({ to, children }) {
  return (
    <>
      <Button as="a" href={to} colorScheme="orange">
        {children}
      </Button>
    </>
  );
}

function App(props) {
  return (
    <div>
      <MyLink to="https://www.naver.com">naver 로</MyLink>
      <MyLink to="https://www.daum.net">다음 으로</MyLink>
    </div>
  );
}

export default App;

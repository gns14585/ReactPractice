import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Link,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box, Flex } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <Box>
      <Flex gap={"10px"}>
        <Box>
          <a href="/apath">에이로 가기</a>
        </Box>
        <Box>
          <a href="/bpath">비로 가기</a>
        </Box>

        <Box>
          <Link to={"/apath"}>에이로 가기</Link>
        </Box>
        <Box>
          <Link to={"/bpath"}>비로 가기</Link>
        </Box>
      </Flex>
      <Outlet />
    </Box>
  );
}

function AComp() {
  return <Box>에이 컴포넌트</Box>;
}

function BComp() {
  return <Box>비 컴포넌트</Box>;
}

function App(props) {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<HomeComponent />}>
        <Route path="apath" element={<AComp />} />
        <Route path="bpath" element={<BComp />} />
      </Route>,
    ),
  );

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;

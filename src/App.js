import React from "react";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Outlet,
  Route,
  RouterProvider,
} from "react-router-dom";
import { Box } from "@chakra-ui/react";

function HomeComponent() {
  return (
    <Box>
      공통된 요소들
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

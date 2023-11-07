import React, { useContext } from "react";
import { Input } from "@chakra-ui/react";
import { TextContext } from "../App";

export function MyInput() {
  const { setText } = useContext(TextContext);
  return <Input onChange={(e) => setText(e.target.value)} />;
}

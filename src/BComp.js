import React, { useContext } from "react";
import { Text } from "@chakra-ui/react";
import { MessageContext } from "./App";

export function BComp() {
  const { message } = useContext(MessageContext);
  return <Text>{message}</Text>;
}

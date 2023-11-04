import { Box } from "@chakra-ui/react";

function App(props) {
  return (
    <div>
      <Box bgColor="tomato">Lorem ipsum dolor.</Box>
      <Box bgColor="red">Lorem ipsum dolor.</Box>
      <Box bgColor="blue">Dolore, sint ut!</Box>
      <Box bgColor="blue.50">Incidunt, iste, voluptatem.</Box>
      <Box bgColor="blue.100">Animi, dignissimos nobis!</Box>
      <Box bgColor="blue.900">Ea eius, reiciendis?</Box>
      <Box bgColor="gray">Consequuntur, quos, ut.</Box>
      <Box bgColor="gray.100">Incidunt, pariatur, ratione!</Box>
      <Box bgColor="gray.500">Autem eos, voluptates.</Box>
      <Box bg="yellow.600" color="gray.200">
        Possimus sit, unde?
      </Box>
      <Box bg="facebook.500" color="linkedin.100">
        Molestias, nobis veritatis!
      </Box>
    </div>
  );
}

export default App;

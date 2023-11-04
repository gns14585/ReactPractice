import Box, { color } from "./component/Box";
import Container, { color as myColor } from "./component/Container";

function App() {
  return (
    <div>
      <Box style={{ color: color }} />
      <Container style={{ color: myColor }} />
    </div>
  );
}

export default App;

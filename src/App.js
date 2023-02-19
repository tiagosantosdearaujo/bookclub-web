import { ChakraProvider } from "@chakra-ui/react";
import { theme } from "styles";
import { LoguinScreen } from "modules/unauthenticated/screens";

function App() {
  return (
    <ChakraProvider theme={theme}>
      <LoguinScreen />
    </ChakraProvider>
  );
}

export default App;

import * as React from "react";

import StoryContainer from "./containers/StoryContainer";
import { ChakraProvider } from "@chakra-ui/react";

const App : React.FC = () => {

    return (
      <ChakraProvider>
        <StoryContainer />
      </ChakraProvider>
    );
  
}

export default App;

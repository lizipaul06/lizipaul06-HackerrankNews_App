import React, { Component } from "react";

import StoryContainer from "./containers/StoryContainer";
import { ChakraProvider } from "@chakra-ui/react";

class App extends Component {
  render() {
    return (
      <ChakraProvider>
        <StoryContainer />
      </ChakraProvider>
    );
  }
}

export default App;

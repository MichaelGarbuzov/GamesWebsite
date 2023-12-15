import { createRoot } from "react-dom/client";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import App from "./App";
import theme from "./theme";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.css'

const container = document.getElementById("root");
if (container) {
  const root = createRoot(container);
  root.render(
    <React.StrictMode>
      <ChakraProvider theme={theme}>
        <ColorModeScript initialColorMode={theme.config.initialColorMode} />
        <App />
      </ChakraProvider>
    </React.StrictMode>
  );
}

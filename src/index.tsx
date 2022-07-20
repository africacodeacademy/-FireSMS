import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import { createRoot } from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import App from "./App";
import CustomTheme from "./ExtendTheme";

const container = document.getElementById("root") as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <ChakraProvider theme={CustomTheme}>
      <App />
    </ChakraProvider>
  </React.StrictMode>,
);

reportWebVitals();

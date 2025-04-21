import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import "./index.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider attribute="class">
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ThemeProvider>
  </StrictMode>
);

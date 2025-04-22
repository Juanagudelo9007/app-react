import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";


createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ThemeProvider attribute="class">
        <ChakraProvider>
          <App />
        </ChakraProvider>
      </ThemeProvider>
    </BrowserRouter>
  </StrictMode>
);

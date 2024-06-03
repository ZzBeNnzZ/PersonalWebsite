import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { ThemeProvider, createTheme } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";

const theme = createTheme({
  palette: {
    background: {
      default: "#FAFBF4",
    },
    primary: {
      main: "#1F3541",
    },
    secondary: {
      main: "#ba896e",
    },
    text: {
      primary: "#1F3541",
      secondary: "#ADB3BC",
    },
  },

  typography: {
    fontFamily: ["montserrat", "lato"].join(","),

    h1: {
      fontWeight: 700,
      fontFamily: "montserrat",
      fontSize: "50px",
    },
    h2: {
      fontWeight: 400,
      fontFamily: "lato",
      fontSize: "30px",
    },
    h3: {
      fontWeight: 400,
      fontFamily: "lato",
      fontSize: "17px",
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

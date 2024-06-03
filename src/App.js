import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./components/Menu";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";

function App() {
  return (
    <div id="root">
      <Router>
        <MenuBar>
          <Routes>
            <Route path="/" element={<App />} />
          </Routes>
        </MenuBar>
      </Router>

      <div id="landing_background" className="center_expand">
        <Typography className="landing_text" variant="h1" color={"primary"}>
          Hi, I'm <span className="highlight_style">Quang Huy</span> Le
        </Typography>

        <Typography className="landing_text" variant="h2">
          A computer science student at Texas A&M
        </Typography>
      </div>
    </div>
  );
}

export default App;

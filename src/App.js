import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MenuBar from "./components/Menu";
import { ThemeProvider, useTheme } from "@mui/material/styles";
import { Typography } from "@mui/material";
import profilePicture from "./images/prof_pic.jpg";
import Button from "@mui/material/Button";
import { useState } from "react";

function App() {
  const [activeButton, setActiveButton] = useState("interest");

  const handleClick = (button) => {
    setActiveButton(button);
  };
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
        <img id="profilePic" src={profilePicture} alt="Profile Picture"></img>
        <Typography className="landing_text" variant="h1" color={"primary"}>
          Hi, I'm <span className="highlight_style">Quang Huy</span> Le
        </Typography>

        <Typography className="landing_text" variant="h2">
          A computer science student at Texas A&M
        </Typography>
      </div>

      <div id="aboutMeDiv">
        <Typography variant="h1" color={"secondary"}>
          About Me
        </Typography>
        <div id="aboutMeButtonDiv">
          <Button
            className={`aboutMeButtons ${
              activeButton === "interest" ? "active" : ""
            } `}
            variant="text"
            onClick={() => handleClick("interest")}
          >
            Interest/Hobby
          </Button>
          <Button
            className={`aboutMeButtons ${
              activeButton === "funFacts" ? "active" : ""
            } `}
            variant="text"
            onClick={() => handleClick("funFacts")}
          >
            Fun Facts
          </Button>
          <Button
            className={`aboutMeButtons ${
              activeButton === "links" ? "active" : ""
            } `}
            variant="text"
            onClick={() => handleClick("links")}
          >
            Links
          </Button>
        </div>
        <div className="infoSection">
          {activeButton === "interest" && (
            <div className="info show">
              <ul className="listContent">
                <li>
                  I love traveling, especially with my family. Together, we've
                  explored over 10 countries, creating unforgettable memories
                  along the way.
                </li>
                <li>
                  In addition to traveling, I enjoy playing games with friends.
                  These moments allow me to truly connect with new people and
                  strengthen the bonds with my friends.
                </li>
                <li>
                  Beyond video games, I also cherish sitting down and talking
                  with friends at school. These conversations are opportunities
                  for me to learn new things and expand my knowledge in ways I
                  hadn't before.
                </li>
                <li>
                  I am deeply interested in coding and fascinated by how simple
                  lines of code can bring unimaginable ideas to life. This
                  passion drives me to constantly explore new projects and push
                  the boundaries of what I can create.
                </li>
              </ul>
            </div>
          )}
          {activeButton === "funFacts" && (
            <div className="info show">
              {" "}
              <ul className="listContent">
                <li>
                  I've lived in the US since 8th grade, spending my first year
                  in Maryland and then moving to Texas, where I've been ever
                  since
                </li>
                <li>
                  Unlike many programmers, I don't perform my best coding at
                  night.
                </li>
                <li>I love drinking coffee, especially Vietnamese coffee.</li>
                <li>
                  There's a 15-year age gap between my youngest sibling and me.
                </li>
              </ul>
            </div>
          )}
          {activeButton === "links" && (
            <div className="info show">
              {" "}
              <ul className="listContent"></ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import { Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import linkedinIcon from "./navImg/Linkedin-icon.png";
import gitHubIcon from "./navImg/github-icon.png";
import brownIcon from "./navImg/brown_icon.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

const MenuBar = () => {
  const theme = useTheme();
  const textStyle = {
    color: theme.palette.text.primary,
    variant: theme.typography.h3,
  };

  return (
    <nav color="secondary" id="navBar">
      <div id="linkDiv">
        <a href="#">
          <img id="logoImg" src={brownIcon} alt="Logo"></img>
        </a>
        <a color="secondary" className="navLink" href="#aboutMeDiv">
          <Typography className="menuOption" variant="h3" color={"primary"}>
            About Me
          </Typography>
        </a>
        <a className="navLink" href="">
          <Typography className="menuOption" variant="h3" color={"primary"}>
            Education
          </Typography>
        </a>

        <a className="navLink" href="">
          <Typography className="menuOption" variant="h3" color={"primary"}>
            Resume
          </Typography>
        </a>
        <a className="navLink" href="">
          <Typography className="menuOption" variant="h3" color={"primary"}>
            Experience
          </Typography>
        </a>
        <a className="navLink" href="">
          <Typography className="menuOption" variant="h3" color={"primary"}>
            Project
          </Typography>
        </a>

        <a color="secondary" className="navLink" href="#">
          <Typography className="menuOption" variant="h3" color={"primary"}>
            Contact Me
          </Typography>
        </a>
      </div>

      <div id="externalLinkDiv">
        <a target="blank" href="https://www.linkedin.com/in/huyben">
          <FontAwesomeIcon
            className="iconImage"
            icon={faLinkedin}
            color={"primary"}
          />
        </a>
        <a target="blank" href="https://github.com/ZzBeNnzZ">
          <FontAwesomeIcon
            className="iconImage"
            icon={faGithub}
            color={"primary"}
          />
        </a>
      </div>
    </nav>
  );
};

export default MenuBar;

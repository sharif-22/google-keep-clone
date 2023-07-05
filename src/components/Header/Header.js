import React from "react";
import "./Header.css";
import "bootstrap/dist/css/bootstrap.min.css";
import LightbulbSharpIcon from "@mui/icons-material/LightbulbSharp";
function Header() {
  return (
    <div className="yellow-theam ">
      <div className="container header">
        <LightbulbSharpIcon className="icon" fontSize="large" />
        <h1>Google Keep Clone </h1>
      </div>
    </div>
  );
}

export default Header;

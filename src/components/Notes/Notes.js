import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Notes.css";
const Notes = (props) => {
  return (
    <div className="notes-wh col-12 col-md-4 col-xl-3 my-3 my-md-4  ">
      <div className="notes">
        <h1>{props.title}</h1>
        <p>{props.content}</p>
      </div>
    </div>
  );
};

export default Notes;

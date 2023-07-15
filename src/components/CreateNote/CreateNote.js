// import section

import React, { useState } from "react";
import "./CreateNote.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fab, Zoom } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import ClearIcon from "@mui/icons-material/Clear";

// import section end

//  react functional component
const CreateNote = ({ onAdd }) => {
  // storing the data in variable
  // using useState hook for user interaction to popup title

  const [isExpand, setIsExpand] = useState(false);
  const [collapse, setCollapse] = useState(false);

  // method 1 to use useState
  // const [title, settitle] = useState("");
  // const [contenet, setcontenet] = useState("");

  // method 2 to use useState
  const [note, setNote] = useState({
    title: "",
    content: "",
  });

  // -------------
  // utillities functions

  // function to set isExpand = true | expand() return Boolean value
  function expand() {
    setIsExpand(!isExpand);
  }

  function ColapsExpand() {
    setCollapse(!collapse);
  }
  // force value
  function textarea() {
    setIsExpand(true);
    setCollapse(false);
  }

  // function to store text data
  function HandelInput(event) {
    let name = event.target.name;
    let value = event.target.value;
    // console.log(value);

    setNote((prevNote) => {
      return {
        ...prevNote,
        [name]: value,
      };
    });
  }

  function HandleClick(event) {
    // console.log(`Title : ${note.title} , Content :  ${note.content}`);

    onAdd(note);
    setNote({ title: "", content: "" });
    ColapsExpand();
  }

  // utillities functions end
  // -------------

  // returning jsx

  return (
    <div className="note-page container">
      <form className="w-70">
        {isExpand && (
          <input
            name="title"
            value={note.title}
            placeholder="Enter Title "
            onChange={HandelInput}
          />
        )}
        <textarea
          contentEditable="true"
          name="content"
          value={note.content}
          placeholder="Start the Notes in detail "
          rows={isExpand ? 5 : 2}
          onClick={textarea}
          onChange={HandelInput}
        />
      </form>
      <Zoom in={isExpand}>
        {collapse ? (
          // true
          <Fab onClick={expand} className="fab-icon" size="medium">
            <ClearIcon />
          </Fab>
        ) : (
          // false
          <Fab
            onClick={(ColapsExpand, HandleClick)}
            className="fab-icon"
            size="medium"
          >
            <AddIcon />
          </Fab>
        )}
      </Zoom>
    </div>
  );
};

export default CreateNote;

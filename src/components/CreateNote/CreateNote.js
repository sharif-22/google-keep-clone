// import section

import React, { useState } from "react";
import "./CreateNote.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Fab, Zoom } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

// import section end

//  react functional component
const CreateNote = (props) => {
  // storing the data in variable
  // using useState hook for user interaction to popup title

  const [isExpand, setIsExpand] = useState(false);

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
    setIsExpand(true);
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
    props.onAdd(note);
    setNote({ title: "", content: "" });
  }

  // utillities functions end
  // -------------

  // returning jsx

  return (
    <div className="note-page container">
      <form>
        {isExpand && (
          <input
            name="title"
            value={note.title}
            placeholder="Enter Title "
            onChange={HandelInput}
          />
        )}
        <textarea
          name="content"
          value={note.content}
          placeholder="Start the Notes in detail "
          rows={isExpand ? 3 : 2}
          onClick={expand}
          onChange={HandelInput}
        />
      </form>
      <Zoom in={isExpand}>
        <Fab onClick={HandleClick} className="fab-icon" size="medium">
          <AddIcon />
        </Fab>
      </Zoom>
    </div>
  );
};

export default CreateNote;
// eslint-disable-next-line
{
  /**
   * useState Hook 
   * 1- we need to import the hook in react package 
   *      hooks are exported in normal methods so we need to specify the name in {curly braces } while importing the hook
   * 
   * 2- SYNTAX and Example 
   * 
   *    const [variablename , callbackfunction] = useState (intial value of the variable it can be any datatype boolean , string, num etcc )
   *    
   *        EX:- const [count ,setCount] = useState(0)
   *                  even though we change the count = 1 it doesn't  work 
   *        to change the count -> [0] value 
   *        function click ()=>{ setCount(count + 1)}
   *    when the click funtion trigger the count value will increment with respective of btnClicks 
   * 
   * 

*/
}

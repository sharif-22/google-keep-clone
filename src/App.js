import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

import "bootstrap/dist/js/bootstrap.bundle.min";
import "./App.css";
import Header from "./components/Header/Header";
import CreateNote from "./components/CreateNote/CreateNote";
import Notes from "./components/Notes/Notes.js";

const App = () => {
  const [notes, setNotes] = useState([]);

  function addNote(newNote) {
    setNotes((prevNotes) => {
      return [...prevNotes, newNote];
    });
    console.log(notes);
  }
  return (
    <div>
      <Header />
      <CreateNote onAdd={addNote} />
      <div className="container">
        <div className="row ">
          {notes.map((noteItems, index) => {
            // console.log(noteItems);
            return (
              <Notes title={noteItems.title} content={noteItems.content} />
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;

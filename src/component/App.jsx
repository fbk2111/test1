import React, { useState } from 'react';
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notesArray from "./notes"; // Make sure this path is correct based on your project structure
import CreateArea from "./CreateArea";

function App() {
  const [notes, setNotes] = useState(notesArray);


  function addNote(newNote) {
    setNotes(prevNotes => {
      return [...prevNotes, { ...newNote, key: Date.now() }];
    });
  }

  function deleteNote(id) {
    setNotes(prevNotes => {
      return prevNotes.filter(noteItem => noteItem.key !== id);
    });
  }

  return (
    <div>
      <Header />
      <CreateArea onAdd={addNote} />
      {notes.map(noteItem => (
        <Note
          key={noteItem.key}
          id={noteItem.key}
          title={noteItem.title}
          content={noteItem.content}
          onDelete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;


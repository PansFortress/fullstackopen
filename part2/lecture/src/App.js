import React, { useState, useEffect } from "react";
import axios from 'axios'

const Note = ({ note }) => {
  return <li>{note.content}</li>;
};

const App = props => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setShowAll] = useState(false);

  const hook = () => {
    axios
      .get('http://localhost:3001/notes')
      .then(response=> {
        setNotes(response.data)
      })
  }

  useEffect(hook, [])

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important === true);

  const addNote = event => {
    event.preventDefault();
    console.log("button clicked", event.target);


    const noteObject = {
      content: newNote,
      date: new Date().toISOString(),
      important: Math.random() < 0.5,
    };

    axios
      .post('http://localhost:3001/notes', noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })

  };

  const handleNoteChange = event => {
    setNewNote(event.target.value);
  };

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map(note => (
          <Note key={note.id} note={note} />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNoteChange} />
        <button type="submit">save</button>
      </form>

      <button onClick={() => setShowAll(!showAll)}>Toggle Showing</button>
    </div>
  );
};

export default App;

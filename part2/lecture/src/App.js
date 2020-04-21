import React, { useState, useEffect } from "react";
import noteService from './services/notes'

const Note = ({ note, toggleImportance }) => {
  const label = note.important ? 'make not important' : 'make important'

  return (
    <li>
      {note.content}
      <button onClick={toggleImportance}>{label}</button>
    </li>
  );
};

const App = props => {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState("a new note");
  const [showAll, setShowAll] = useState(false);

  const hook = () => {
      noteService
      .getAll()
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

    noteService
      .create(noteObject)
      .then(response => {
        setNotes(notes.concat(response.data))
        setNewNote('')
      })

  };

  const handleNoteChange = event => {
    setNewNote(event.target.value);
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id)
    const changedNote = {...note, important: !note.important}

    noteService
      .update(id, changedNote)
      .then(response => {
        console.log(response)
        setNotes(notes.map(note => note.id !== id ? note : response.data))
      })
    
  }

  return (
    <div>
      <h1>Notes</h1>
      <ul>
        {notesToShow.map((note, i) => (
          <Note 
            key={i} 
            note={note} 
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
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

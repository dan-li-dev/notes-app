import React, { useState, useEffect } from 'react';
// import { useSelector, useDispatch } from 'react-redux'
import {addNote, setNotes, deleteNote} from './features/notes/notesSlice'
import {useAppSelector, useAppDispatch} from './hooks'
//import './App.css'
import Button from '@mui/material/Button';




function App() {

  const notes = useAppSelector((state) => state.notes)
  const dispatch = useAppDispatch()
  
  useEffect(() => {
    document.title=`Daniel's App`
    const fetchNotes = async () => {
      try {
        const res = await fetch('/api/notes');
        const notes = await res.json();
        dispatch(setNotes(notes));

      } catch (e) {
        console.error('api fetch unsuccessful', e);
      }
    };
  
    fetchNotes();
  },[])

  

  const saveNote = () => {
    dispatch(addNote(text))
    setText('')
  }
  const [text, setText] = useState('');

  const removeNote = (id: number) => {
    dispatch(deleteNote(id))
  }

  return (
    <div className="App">
      <header className="App-header">
      <h1>Translate App</h1>
      <input value={text} onChange={e => setText(e.target.value)}placeholder='Type your notes in here' />
      <br/>
      <Button variant="text" onClick={saveNote} >
    Save Note
  </Button>
  <br/>
  <ul>
  {notes.map((note) => 
    (<li key={note.id}>
      {note.id}. - 
       {note.value}
      <Button variant="text" onClick={() => removeNote(note.id)}> Delete </Button>
    </li>))
  }
  </ul>
      </header>
    </div>
  );
}

export default App;

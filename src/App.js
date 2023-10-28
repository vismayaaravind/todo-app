// src/App.js
import React, { useState } from 'react';
import Note from './components/Note';
import TextField from '@mui/material/TextField';


function App() {
  const [notes, setNotes] = useState([]);
  const [newNote, setNewNote] = useState('');
  const addNote = () => {
    if (newNote.trim() !== '') {
      setNotes([...notes, {
        id: Date.now(),
        text: newNote,
        isDone: false,
      },
    ]);
      setNewNote('');
    }else{
      alert("Please add a Note!!!")
    }
  };
 
  const editNote = (id, newText) => {
    setNotes(
      notes.map((note) =>
        note.id === id ? { ...note, text: newText } : note
      )
    );
  };
  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));  
  };
  const deleteAllNote = () => {
    setNotes([]);  
  };
  return (
     <div className='h-full bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% ...'>
        <div className='flex flex-col items-center h-100%'>
          <h1 className='text-center text-red-700 text-3xl m-16 p-3 w-64 font-bold bg-slate-100 rounded-full'>Todo List</h1>
       <div className=' flex items-center bg-slate-100 rounded-full p-3'>
            <TextField id="standard-basic" label="What Todo..." className='w-96' variant="standard" value={newNote} onChange={(e)=>setNewNote(e.target.value)}/>&nbsp;&nbsp;
 <i class="fa-solid fa-circle-plus fa-2xl"onClick={addNote}></i>
       </div>
          <div className="flex flex-col space-y-2 ... ">
  {
    !notes.length?<p className='font-bold mt-3'>No Tasks has been added!!!</p>:
    notes.length===1?<p className='font-bold mt-3'>You have 1 Task Todo</p>:notes.length>1?(<div className='flex flex-row '><h4 className='font-bold text-center w-20 mt-3 bg-slate-100 rounded-full p-1 '>TASKS:</h4>
    <button className='mt-2 ml-60 rounded-full p-1 w-9 h-9 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 hover:from-pink-500 hover:to-yellow-500 ' onClick={deleteAllNote}> <i class="fa-solid fa-trash"></i></button></div>
    ):null
  }
  
   {notes.map((note) => (
              <Note  key={note.id}
              note={note}
              onDelete={deleteNote}
              onEdit={editNote}/>
             ))}
            
          </div>
        </div>
    
     </div>
  );
}


export default App;

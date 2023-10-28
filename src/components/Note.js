import React, { useState } from 'react';
const Note = ({ note, onDelete,onEdit}) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(note.text);
  
  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    onEdit(note.id, editedText);
    setIsEditing(false);
  };
  
  return (
    <div className="flex flex-row w-96 font-bold bg-slate-100 p-3 rounded-full">
    {isEditing ? (
      <input
        type="text"
        value={editedText}
        onChange={(e) => setEditedText(e.target.value)}
      />
    ) : (
      <p className='ml-3 pr-10 mr-6 grow'>{note.text}</p>
    )}
     <div className='flex flex-row-reverse space-x-8 space-x-reverse ...'>
      <i class="fa-solid fa-pen-to-square pt-1" onClick={handleEdit}></i>
      <i class="fa-solid fa-trash pt-1"  onClick={() => onDelete(note.id)}></i>
{isEditing ? (
    <i class="fa-solid fa-circle-check pt-1 pl-2"  onClick={handleSave}></i>
    ) :(
<></>
 ) }
      </div>
  </div>
);
};

export default Note;

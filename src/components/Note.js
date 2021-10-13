import React from 'react'
import { useDispatch } from 'react-redux'
import { toggle_note } from '../redux/actions/notes.action'

const Note = ({ note }) => {
  const dispatch = useDispatch()

  // ↓ CONDITIONAL RENDERING
  if (!note) {
    return null
  }
  return (
    <div className='card m-2'>
      <div className='card-header'>{note.date}</div>
      <div className='card-body'>{note.note}</div>
      <h3>{note.isImportant ? 'da' : 'nu'}</h3>
      <h3>{note.id}</h3>
      <button
        className='btn m-2'
        onClick={() => toggle_note(note.id)(dispatch)}
      >
        {note.isImportant ? 'Remove' : 'Add'}
      </button>
    </div>
  )
}

export default Note

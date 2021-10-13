import React from 'react'
import Note from './Note'
import { useSelector } from 'react-redux'

const ImportantNotes = () => {
  const notes = useSelector((state) => state.notes_reducer.notes)
  const loading = useSelector((state) => state.notes_reducer.loading)

  // ↓ CONDITIONAL RENDERING
  if (loading === true) {
    return <h1>LOADING...</h1>
  }

  if (!notes) {
    return <h1>NO NOTES...</h1>
  }
  return (
    <div className='importantNotes'>
      <h4>Important notes</h4>
      <div className='row'>
        {notes
          .filter((note) => note.isImportant === true)
          .map((note) => (
            <Note note={note} key={note.id} />
          ))}
      </div>
    </div>
  )
}

export default ImportantNotes

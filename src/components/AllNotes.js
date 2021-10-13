import React from 'react'
import Note from './Note'

import { useSelector } from 'react-redux'

const AllNotes = () => {
  const notes = useSelector((state) => state.notes_reducer.notes)
  const loading = useSelector((state) => state.notes_reducer.loading)
  console.log(notes, 'isimportant?')
  // ↓ CONDITIONAL RENDERING
  if (loading === true) {
    return <h1>LOADING...</h1>
  }

  return (
    <div className='my-3'>
      <h5>All notes</h5>
      <div className='row'>
        {notes.map((nota) => (
          <Note note={nota} />
        ))}
      </div>
    </div>
  )
}

export default AllNotes

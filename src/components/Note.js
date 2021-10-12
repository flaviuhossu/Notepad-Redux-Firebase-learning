import React from 'react'
import { toggle_note } from '../redux/actions/notes.action'
import { connect } from 'react-redux'

const Note = ({ note: { date, note, id, isImportant }, toggle_note }) => {
  console.log(isImportant)
  return (
    <div className='card m-2'>
      <div className='card-header'>{date}</div>
      <div className='card-body'>{note}</div>
      <button className='btn m-2' onClick={() => toggle_note(id)}>
        {isImportant ? 'Remove' : 'Add'}
      </button>
    </div>
  )
}

export default connect(null, { toggle_note })(Note)

import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { add_new_note } from '../redux/actions/notes.action'

const CreateNote = () => {
  const [note, setNote] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = {
      note,
      id: Math.floor(Math.random() * 1000),
      date: new Date().toJSON().slice(0, 10),
      isImportant: 'false',
    }
    add_new_note(data)(dispatch)
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className='form-group'>
          <textarea
            name=''
            cols='3'
            className='form-control'
            placeholder='Write your dream note :)'
            value={note}
            onChange={(e) => setNote(e.target.value)}
          ></textarea>
          <button className='btn' type='submit'>
            Add Note
          </button>
        </div>
      </form>
    </div>
  )
}
// export default connect(null, add_new_note)(CreateNote)
export default CreateNote

// const mapDispatchToProps = (dispatch) => {
//   return {
//     add_new_note: (data) =>
//       dispatch({
//         type: 'ADD_NOTE',
//         payload: data,
//       }),
//   }
// }

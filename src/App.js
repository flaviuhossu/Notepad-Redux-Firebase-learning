import React, { useEffect } from 'react'
import AllNotes from './components/AllNotes'
import CreateNote from './components/CreateNote'
import ImportantNotes from './components/ImportantNotes'
import { load_notes } from './redux/actions/notes.action'
import { useStore } from 'react-redux'
import { useDispatch } from 'react-redux'
// import { connect } from 'react-redux'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    load_notes()(dispatch)
  }, [])

  const store = useStore()

  const loading = store.getState().notes_reducer.loading

  return (
    <div className='container mt-3 p-3'>
      <CreateNote />
      <hr />

      {loading && (
        <div className='text-center'>
          <div className='spinner-border my-3' />
        </div>
      )}

      <ImportantNotes />
      <hr />
      <AllNotes />
    </div>
  )
}
export default App

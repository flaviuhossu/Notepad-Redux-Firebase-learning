// action={
//  type: "ADD_NOTE",
//  payload: {}
// }

import { ADD_NOTE, LOAD_NOTES, SET_LOADER, TOGGLE_NOTE } from '../types'

const initialState = {
  notes: [],
  loading: false,
}

const reducer = (previousState = initialState, action) => {
  //destructure the action
  const { type, payload } = action

  switch (type) {
    case ADD_NOTE:
      return {
        ...previousState,
        notes: [...previousState.notes, payload],
        loading: false,
      }
    // case TOGGLE_NOTE:
    //   const new_notes = previousState.notes.slice()
    //   const index = new_notes.findIndex((note) => note.id === payload)

    //   const note = new_notes[index]
    //   const new_note = {
    //     ...note,
    //     isImportant: !note.isImportant,
    //   }
    //   new_notes[index] = new_note
    //   return {
    //     ...previousState,
    //     notes: new_notes,
    //     loading: false,
    //   }
    case LOAD_NOTES:
      return {
        ...previousState,
        notes: payload,
        loading: false,
      }
    case SET_LOADER:
      return {
        ...previousState,
        loading: true,
      }
    default:
      return previousState
  }
}

export default reducer

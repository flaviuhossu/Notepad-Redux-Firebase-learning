import { doc, getDocs, setDoc, updateDoc } from '@firebase/firestore'
import db from '../../firebase'
import { ADD_NOTE, LOAD_NOTES, SET_LOADER, TOGGLE_NOTE } from '../types'
import { collection, addDoc } from 'firebase/firestore'

export const add_new_note = (data) => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADER,
    })

    console.log('Add new data', data.isImportant)
    const docRef = doc(db, 'notes', data.id.toString())
    await setDoc(docRef, data)

    dispatch({
      type: ADD_NOTE,
      payload: data,
    })
  } catch (error) {
    console.log(error.message)
  }
}
export const toggle_note = (id) => async (dispatch) => {
  try {
    const toggleRef = doc(db, 'notes', id.toString())

    await updateDoc(toggleRef, {
      isImportant: true,
    })
    dispatch({
      type: TOGGLE_NOTE,
      loading: true,
    })

    dispatch({
      type: LOAD_NOTES,
    })
  } catch (error) {
    console.log(error.message)
  }
}

export const load_notes = () => async (dispatch) => {
  try {
    dispatch({
      type: SET_LOADER,
    })

    const snapshot = await getDocs(collection(db, 'notes'))

    const all_notes = snapshot.docs.map((doc) => doc.data())

    dispatch({
      type: LOAD_NOTES,
      payload: all_notes,
    })
  } catch (error) {
    console.log(error.message)
  }
}

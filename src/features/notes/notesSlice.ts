import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import type { RootState } from 'store'


interface NoteState {
  id:number
    value: string
}

const initialState: NoteState[] = [{
    id: 1,
    value: 'This is an empty note',
}]

const noteSlice = createSlice({
    name: 'note', // the key in the Redux store
  initialState,
  reducers: {
    addNote: (state, action: PayloadAction<string>) => {
        state.push({id: Math.random()*100, value: action.payload})
    },
    setNotes: (_, action: PayloadAction<NoteState[]>) => {
      return action.payload;
    },
    deleteNote: (state, action: PayloadAction<number>) => {
      return state.filter((note) => note.id !== action.payload)
    }
  }
})

export const {addNote, setNotes, deleteNote} = noteSlice.actions

export const selectNotes = (state: RootState) => state.notes

export default noteSlice.reducer

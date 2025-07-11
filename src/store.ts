import { configureStore } from '@reduxjs/toolkit'
import notesReducer from './features/notes/notesSlice'

const store = configureStore({
    reducer: {
        notes: notesReducer,
    },
  })

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
import { configureStore, combineReducers } from '@reduxjs/toolkit'
import userSlice from "../features/user/userSlice"


const rootReducer = combineReducers({
  user: userSlice
  });

const store = configureStore({
  reducer: rootReducer,
})

export default store;
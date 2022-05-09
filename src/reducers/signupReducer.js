import { createSlice } from '@reduxjs/toolkit'
import userService from '../services/users'

const signupSlice = createSlice({
  name: 'signupUser',
  initialState: [],
  reducers: {
    appendUser(state, action) {
      state.push(action.payload)
    }
  }
})

export const { appendUser } = signupSlice.actions

export const createNewUser =  (username, name, password)  => {
  return async dispatch => {
    const newUser = await userService.createNewUser( username, name, password )
    dispatch(appendUser(newUser))
  }
}

export default signupSlice.reducer




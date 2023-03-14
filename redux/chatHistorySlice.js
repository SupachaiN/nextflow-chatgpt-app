import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    chatHistory: [],
    username: 'Mai'
}

const chatHistorySlice = createSlice({
  name: 'chatroom',
  initialState,
  reducers: {
    updateUsername: (state, action) => {
        console.log(action.payload)
        state.username = action.payload
    },
    addUserMessage: (state, action) => {

        let chatMessage = {
          sender: 'Me',
          text: action.payload
        };
  
        console.log(chatMessage);
          
        state.chatHistory.push(chatMessage);
      }
  }
});

export const { addUserMessage } = chatHistorySlice.actions

export default chatHistorySlice.reducer
import { createSlice } from '@reduxjs/toolkit';

export const slice = createSlice({
  name: 'game',
  initialState: {
    value: ''
  },
  reducers: {
    moveRight(state){
      state.value = 'right'
    },
    moveLeft(state){
      state.value = 'left'
    },
    rotate(state){
      state.value = 'rotate'
    },
    moveDown(state){
      state.value = 'down'
    },
    pause(state){
      state.value = 'pause'
    },
    resume(state){
      state.value = 'resume'
    },
    restart(state){
      state.value = 'restart'
    }
  }
});

// Action creators are generated for each case reducer function
export const {moveRight, moveLeft, rotate, moveDown, pause, resume, restart} = slice.actions;

export default slice.reducer;
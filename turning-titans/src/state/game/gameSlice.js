import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    questions: null,
    currentStep: null,
    result: null,
    status: 'idle',
    error: null,
    thId: '',
    runId: '',
};

const GameSlice = createSlice({
  name: 'game',
  initialState,
  reducers: {
    saveResult(state, action) {
      
    },
    resetResults(state, action) {
      state.result = null;
    },
    setCurrentLevel(state, action) {
      state.currentStep = action.payload;
    },
    resetCurrentLevel(state, action) {
      state.currentStep = null;
    },
  },
});

export const { saveResult, resetResults, setCurrentLevel, resetCurrentLevel } = GameSlice.actions;

export default GameSlice.reducer;
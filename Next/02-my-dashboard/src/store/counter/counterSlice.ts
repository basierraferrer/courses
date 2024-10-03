import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICounterState {
    count: number;
    isReady: boolean;
}

const initialState: ICounterState = {
    count: 5,
    isReady: false,
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    initState(state, action: PayloadAction<number>){
      if(state.isReady) return;

      state.count = action.payload;
      state.isReady = true;
    },
    addOne(state){
     state.count++; 
    },
    subtractOne(state){
      if(state.count === 0 ) return;
      state.count--;
    },
    resetCount(state, action:PayloadAction<number>){
      if(action.payload < 0 ){
        state.count = 0;
      }else{
        state.count = action.payload;
      }
    }
  }
});

export const {addOne, initState, resetCount, subtractOne} = counterSlice.actions;

export default counterSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface InitialState {
  userName?: string;
}

let initialState: InitialState = {
  userName: 'Zeeshan',
};

const continentListSlice = createSlice({
  name: 'continentList',
  initialState,
  reducers: {
    addUser: (state: InitialState, action: PayloadAction<InitialState>) => {
      state = action.payload;
      return state;
    },
  },
});

export const { addUser } = continentListSlice.actions;

export default continentListSlice.reducer;

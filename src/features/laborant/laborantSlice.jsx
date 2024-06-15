import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  { hospitalId: '1234567', name:'Yusuf' , surname: 'Peksen' }
];

const laborantSlice = createSlice({
  name: 'laborants',
  initialState,
  reducers: {
    laborantAdd: (state, action) => {
      state.push(action.payload);
    },
  },
});

export const selectAllLaborants = (state) => state.laborants;
export const { laborantAdd } = laborantSlice.actions;
export default laborantSlice.reducer;

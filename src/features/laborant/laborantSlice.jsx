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
    laborantDelete: (state, action) => {
      return state.filter(laborant => laborant.hospitalId !== action.payload)
    }
  },
});

export const selectAllLaborants = (state) => state.laborants;
export const { laborantAdd , laborantDelete } = laborantSlice.actions;
export default laborantSlice.reducer;

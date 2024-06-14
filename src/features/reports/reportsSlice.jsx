import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = [];

const reportsSlice = createSlice({
  name: 'reports',
  initialState,
  reducers: {
    addReport: (state, action) => {
      state.push(action.payload);
    },
    deleteReport: (state, action) => {
      return state.filter(report => report.reportId !== action.payload);
    },
    updateReport: (state, action) => {
      const updatedReport = action.payload;
      const existingReportIndex = state.findIndex(report => report.reportId === updatedReport.reportId);
      if (existingReportIndex !== -1) {
        state[existingReportIndex] = updatedReport;
      }
    }
  }
});

export const selectAllReports = (state) => state.reports;
export const { addReport, deleteReport, updateReport } = reportsSlice.actions;
export default reportsSlice.reducer;

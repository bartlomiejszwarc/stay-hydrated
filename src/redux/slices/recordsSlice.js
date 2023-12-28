import { createSlice } from "@reduxjs/toolkit";

const initialState = {
	records: [],
};

const recordsSlice = createSlice({
	name: "records",
	initialState,
	reducers: {
		setRecords: (state, action) => {
			state.records = action.payload;
		},
		removeFromRecords: (state, action) => {
			state.records = state.records.filter(
				(record) => record.id !== action.payload
			);
		},
	},
});

export const { setRecords, removeFromRecords } = recordsSlice.actions;
export default recordsSlice.reducer;

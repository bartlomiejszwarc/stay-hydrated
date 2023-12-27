import { createSlice } from "@reduxjs/toolkit";
import AsyncStorage from "@react-native-async-storage/async-storage";

const initialState = {
	height: null,
	weight: null,
	age: null,
	waterAmount: null,
	gender: null,
	suggestedWaterAmount: null,
	autoWaterIntakeEnabled: null,
};

const storageSlice = createSlice({
	name: "storage",
	initialState,
	reducers: {
		setWeight: (state, action) => {
			state.weight = action.payload;
			AsyncStorage.setItem("weight", action.payload.toString());
		},
		setHeight: (state, action) => {
			state.height = action.payload;
			AsyncStorage.setItem("height", action.payload.toString());
		},
		setAge: (state, action) => {
			state.age = action.payload;
			AsyncStorage.setItem("age", action.payload.toString());
		},
		setGender: (state, action) => {
			state.gender = action.payload;
			AsyncStorage.setItem("gender", action.payload.toString());
		},
		setWaterAmount: (state, action) => {
			state.waterAmount = action.payload;
			AsyncStorage.setItem("waterAmount", action.payload.toString());
		},
		setSuggestedWaterAmount: (state, action) => {
			state.suggestedWaterAmount = action.payload;
			AsyncStorage.setItem("suggestedWaterAmount", action.payload.toString());
		},
		addWaterAmount: (state, action) => {
			state.waterAmount += parseInt(action.payload);
			AsyncStorage.setItem("waterAmount", state.waterAmount.toString());
		},
		setAutoWaterIntakeEnabled: (state, action) => {
			state.autoWaterIntakeEnabled = action.payload;
			AsyncStorage.setItem("autoWaterIntakeEnabled", action.payload.toString());
		},
	},
});

export const {
	setWeight,
	setHeight,
	setAge,
	setGender,
	setWaterAmount,
	setSuggestedWaterAmount,
	addWaterAmount,
	setAutoWaterIntakeEnabled,
} = storageSlice.actions;
export default storageSlice.reducer;

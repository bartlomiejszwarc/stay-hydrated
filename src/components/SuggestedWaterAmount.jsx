import { View, Text } from "react-native";
import { useEffect, useState } from "react";
import { setSuggestedWaterAmount } from "./../redux/slices/storageSlice";
import { useDispatch, useSelector } from "react-redux";

function SuggestedWaterAmount({ data }) {
	const dispatch = useDispatch();

	const [suggestedWaterIntakeAmount, setSuggestedWaterIntakeAmount] =
		useState(null);
	const calculateSuggestedWaterAmount = () => {
		const waterIntakeForMaleFormula = Math.round(
			10 * data.weight + 6.25 * data.height - 5 * data.age + 5
		);

		const waterIntakeForFemaleFormula = Math.round(
			10 * data.weight + 6.25 * data.height - 5 * data.age - 161
		);
		if (data?.gender === "Male") {
			try {
				setSuggestedWaterIntakeAmount(waterIntakeForMaleFormula);
				dispatch(setSuggestedWaterAmount(waterIntakeForMaleFormula));
			} catch (e) {}
		}
		if (data?.gender === "Female") {
			try {
				setSuggestedWaterIntakeAmount(waterIntakeForFemaleFormula);
				dispatch(setSuggestedWaterAmount(waterIntakeForFemaleFormula));
			} catch (e) {}
		}
	};

	useEffect(() => {
		if (data.gender) calculateSuggestedWaterAmount();
	}, [data]);

	return (
		<View>
			<Text style={{ fontWeight: 100, paddingHorizontal: 5 }}>
				Suggested amount of water based on your weight, height, age and gender:{" "}
				{suggestedWaterIntakeAmount ? suggestedWaterIntakeAmount : "--"} ml
			</Text>
		</View>
	);
}
export default SuggestedWaterAmount;

import { View, Text } from "react-native";
import { useEffect, useState } from "react";
function SuggestedWaterAmount({ data }) {
	const [suggestedWaterIntakeAmount, setSuggestedWaterIntakeAmount] =
		useState(null);
	const calculateSuggestedWaterAmount = () => {
		const waterIntakeForMaleFormula = Math.round(
			10 * data.weight + 6.25 * data.height - 5 * data.age + 5
		);
		const waterIntakeForFemaleFormula = Math.round(
			10 * data.weight + 6.25 * data.height - 5 * data.age - 161
		);
		if (data.gender === "male")
			setSuggestedWaterIntakeAmount(waterIntakeForMaleFormula);
		if (data.gender === "female")
			setSuggestedWaterIntakeAmount(waterIntakeForFemaleFormula);
	};

	useEffect(() => {
		calculateSuggestedWaterAmount();
	}, [data]);
	return (
		<View>
			<Text>
				Suggested amount of water based on your weight, height, age and gender:{" "}
				{suggestedWaterIntakeAmount ? suggestedWaterIntakeAmount : "--"} ml
			</Text>
		</View>
	);
}
export default SuggestedWaterAmount;

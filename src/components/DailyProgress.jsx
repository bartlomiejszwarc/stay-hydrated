import ProgressCircle from "react-native-progress-circle";
import { StyleSheet, Text, View, SafeAreaView, TextInput } from "react-native";
import { useState, useEffect } from "react";
import { useGetDailyAmount } from "../hooks/useGetDailyAmount";
function DailyProgress({ currentAmount, dailyAmount }) {
	const [current, setCurrent] = useState(currentAmount);
	const [percentage, setPercentage] = useState(currentAmount / dailyAmount);
	const { getDataFromStorage } = useGetDailyAmount();

	useEffect(() => {
		const getData = async () => {
			const data = (await getDataFromStorage()) || 0;
			setCurrent(data);
			setPercentage((data * 100) / dailyAmount);
		};
		getData();
	}, []);

	return (
		<View style={{ backgroundColor: "#fafafa" }}>
			<ProgressCircle
				percent={percentage}
				radius={100}
				borderWidth={18}
				color="#0ea5e9"
				shadowColor="#eff6ff"
				bgColor="#fafafa">
				<Text style={{ fontSize: 28 }}>{Math.round(percentage)}%</Text>
				<Text style={{ fontSize: 12, color: "#a3a3a3" }}>
					{current}/{dailyAmount} ml
				</Text>
			</ProgressCircle>
		</View>
	);
}
export default DailyProgress;

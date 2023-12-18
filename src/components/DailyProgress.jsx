import ProgressCircle from "react-native-progress-circle";
import { Text, View } from "react-native";
import { useEffect } from "react";
import { useGetDailyAmount } from "../hooks/useGetDailyAmount";
function DailyProgress({ dailyAmount }) {
	const { getData, dailyAmount: data } = useGetDailyAmount();

	useEffect(() => {
		const getDailyData = async () => {
			await getData();
		};
		getDailyData();
	}, []);

	return (
		<View style={{ backgroundColor: "#fafafa" }}>
			<ProgressCircle
				percent={(data * 100) / dailyAmount}
				radius={100}
				borderWidth={12}
				color="#0ea5e9"
				shadowColor="#dbeafe"
				bgColor="#fafafa">
				<Text style={{ fontSize: 28, fontWeight: 500, color: "#262626" }}>
					{Math.round((data * 100) / dailyAmount)}%
				</Text>
				<Text style={{ fontSize: 14, color: "#171717", fontWeight: 100 }}>
					{data}/{dailyAmount} ml
				</Text>
			</ProgressCircle>
		</View>
	);
}
export default DailyProgress;

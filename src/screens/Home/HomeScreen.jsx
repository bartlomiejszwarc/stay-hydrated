import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import DailyProgress from "../../components/DailyProgress";
import { useState, useEffect } from "react";
import AmountPicker from "../../components/Picker";
import AsyncStorage from "@react-native-async-storage/async-storage";

function HomeScreen() {
	const defaultDailyGoal = 2500;
	const [dailyGoal, setDailyGoal] = useState(null);

	const getDailyGoalFromStorage = async () => {
		const goal = await AsyncStorage.getItem("dailyGoal");
		setDailyGoal(goal);
	};

	useEffect(() => {
		getDailyGoalFromStorage();
	}, []);
	return (
		<SafeAreaView style={styles.container}>
			<View style={styles.container}>
				<View style={{ marginBottom: 36 }}>
					<Text style={styles.textHeader}>Stay hydrated</Text>
					<Text style={styles.textSubHeader}>Drink water.</Text>
				</View>
				<View style={styles.amountContainer}>
					<DailyProgress dailyAmount={dailyGoal || defaultDailyGoal} />
					<AmountPicker />
				</View>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fafafa",
		alignItems: "center",
		justifyContent: "center",
	},
	amountContainer: {
		flex: 0,
		backgroundColor: "#fafafa",
		alignItems: "center",
		justifyContent: "center",
	},
	input: {
		borderBottomWidth: 1,
		borderBottomColor: "#e0f2fe",
		width: 200,
	},
	textHeader: {
		fontSize: 45,
		fontWeight: "700",
	},
	textSubHeader: {
		fontSize: 20,
		fontWeight: "300",
		color: "#262626",
	},
});
export default HomeScreen;

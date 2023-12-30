import { StyleSheet, Text, View, SafeAreaView } from "react-native";
import DailyProgress from "../../components/Home/DailyProgress";
import { useEffect } from "react";
import AmountPicker from "../../components/Home/Picker";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { setSuggestedWaterAmount } from "../../redux/slices/storageSlice";

function HomeScreen() {
	const store = useSelector((state) => state.storage);
	const dispatch = useDispatch();

	const getDailyGoalFromStorage = async () => {
		const goal = await AsyncStorage.getItem("suggestedWaterAmount");
		if (goal?.length > 0) {
			dispatch(setSuggestedWaterAmount(goal));
		} else {
			dispatch(setSuggestedWaterAmount(2500));
		}
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
					<DailyProgress dailyAmount={store.suggestedWaterAmount} />
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

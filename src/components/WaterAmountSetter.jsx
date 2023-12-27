import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";
import { useDispatch, useSelector } from "react-redux";
import { setSuggestedWaterAmount } from "../redux/slices/storageSlice";
function WaterAmountSetter() {
	const store = useSelector((data) => data.storage);
	const [defaultWaterIntake, setDefaultWaterIntake] = useState(
		store.suggestedWaterAmount || 2000
	);
	const dispatch = useDispatch();

	const handleOnPress = (value) => {
		setDefaultWaterIntake((prev) => (prev += value));
		const newValue = defaultWaterIntake + value;
		dispatch(setSuggestedWaterAmount(newValue));
	};

	return (
		<View style={styles.circle}>
			<TouchableOpacity
				style={styles.button}
				onPress={() => handleOnPress(-100)}>
				<AntDesign name="minus" size={36} color="#fafafa" />
			</TouchableOpacity>
			<Text style={styles.amountText}>{defaultWaterIntake} ml</Text>
			<TouchableOpacity
				style={styles.button}
				onPress={() => handleOnPress(100)}>
				<AntDesign name="plus" size={36} color="#fafafa" />
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		width: "100%",
	},
	circle: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		backgrondColor: "green",
		height: "auto",
		width: "100%",
		paddingTop: 10,
	},
	amountText: {
		fontSize: 40,
		fontWeight: "100",
		paddingHorizontal: 15,
	},
	button: {
		width: 50,
		height: 50,
		borderRadius: "100%",
		backgroundColor: "#0ea5e9",
		justifyContent: "center",
		alignItems: "center",
	},
});
export default WaterAmountSetter;

import { View, Text, StyleSheet } from "react-native";
import { useState } from "react";
import { AntDesign } from "@expo/vector-icons";

function WaterAmountSetter() {
	const [defaultWaterIntake, setDefaultWaterIntake] = useState(2000);
	return (
		<View style={styles.circle}>
			<View style={styles.button}>
				<AntDesign name="minus" size={36} color="#fafafa" />
			</View>
			<Text style={styles.amountText}>{defaultWaterIntake} ml</Text>
			<View style={styles.button}>
				<AntDesign name="plus" size={36} color="#fafafa" />
			</View>
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
		height: 200,
		width: "100%",
	},
	amountText: {
		fontSize: 40,
		fontWeight: "200",
		paddingHorizontal: 15,
	},
	button: {
		width: 56,
		height: 56,
		borderRadius: "100%",
		backgroundColor: "#0ea5e9",
		justifyContent: "center",
		alignItems: "center",
	},
});
export default WaterAmountSetter;

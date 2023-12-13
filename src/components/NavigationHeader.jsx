import { View, Text, TextInput, Button } from "react-native";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";

function NavigationHeader() {
	return (
		<View style={styles.container}>
			<View style={styles.textIconContainer}>
				<MaterialIcons name="home" size={24} color="black" />
				<Text style={styles.text}>Home</Text>
			</View>
			<View style={styles.textIconContainer}>
				<MaterialIcons name="history" size={24} color="black" />
				<Text style={styles.text}>History</Text>
			</View>
			<View style={styles.textIconContainer}>
				<MaterialIcons name="settings" size={24} color="black" />
				<Text style={styles.text}>Settings</Text>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "100%",
		paddingHorizontal: 12,
		marginTop: 10,
		flex: 0,
		flexDirection: "row",
		backgroundColor: "#fff",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
	},
	textIconContainer: {
		display: "flex",
		flexDirection: "row",
		alignItems: "center",
		gap: 1,
	},
	text: {
		fontSize: 16,
	},
});

export default NavigationHeader;

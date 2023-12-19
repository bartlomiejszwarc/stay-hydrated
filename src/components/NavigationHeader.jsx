import { View, Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function NavigationHeader() {
	const navigation = useNavigation();

	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<TouchableOpacity
					style={styles.textIconContainer}
					onPress={() => navigation.navigate("Home")}>
					<MaterialIcons name="home" size={24} color="#eff6ff" />
					<Text style={styles.text}>Home</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.textIconContainer}
					onPress={() => navigation.navigate("History")}>
					<MaterialIcons name="history" size={24} color="#eff6ff" />
					<Text style={styles.text}>History</Text>
				</TouchableOpacity>
				<TouchableOpacity
					style={styles.textIconContainer}
					onPress={() => navigation.navigate("Settings")}>
					<MaterialIcons name="settings" size={24} color="#eff6ff" />
					<Text style={styles.text}>Settings</Text>
				</TouchableOpacity>
			</View>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		width: "90%",
		paddingHorizontal: 36,
		marginTop: 10,
		flex: 0,
		flexDirection: "row",
		backgroundColor: "#0ea5e9",
		justifyContent: "space-between",
		alignContent: "center",
		alignItems: "center",
		borderRadius: 25,
		paddingVertical: 10,
		shadowColor: "black",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.2,
		shadowRadius: 5,
	},
	wrapper: {
		justifyContent: "center",
		alignItems: "center",
		shadowColor: "red",
	},
	textIconContainer: {
		display: "flex",
		flexDirection: "col",
		alignItems: "center",
		justifyContent: "center",
		gap: 1,
	},
	text: {
		fontSize: 12,
		color: "#eff6ff",
	},
	textActive: {
		fontSize: 24,
		color: "red",
	},
});

export default NavigationHeader;

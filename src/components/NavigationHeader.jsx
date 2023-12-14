import { View, Text, TextInput, Button, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

function NavigationHeader() {
	const navigation = useNavigation();
	return (
		<View style={styles.container}>
			<TouchableOpacity
				style={styles.textIconContainer}
				onPress={() => navigation.navigate("Home")}>
				<MaterialIcons name="home" size={24} color="black" />
				<Text style={styles.text}>Home</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.textIconContainer}
				onPress={() => navigation.navigate("History")}>
				<MaterialIcons name="history" size={24} color="black" />
				<Text style={styles.text}>History</Text>
			</TouchableOpacity>
			<TouchableOpacity
				style={styles.textIconContainer}
				onPress={() => navigation.navigate("Settings")}>
				<MaterialIcons name="settings" size={24} color="black" />
				<Text style={styles.text}>Settings</Text>
			</TouchableOpacity>
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
		backgroundColor: "#fafafa",
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

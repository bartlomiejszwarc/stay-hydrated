import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TextInput,
	Button,
	TouchableOpacity,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

import { useState } from "react";

function SettingsScreen() {
	const navigation = useNavigation();
	const [weight, setWeight] = useState(80);
	const [height, setHeight] = useState(180);
	const [age, setAge] = useState(25);
	return (
		<SafeAreaView style={styles.container}>
			<Text style={{ paddingLeft: 20, fontSize: 35, paddingTop: 20 }}>
				Settings
			</Text>
			<View style={styles.settingField}>
				<View style={styles.settingTitle}>
					<FontAwesome5 name="weight" size={24} color="#525252" />
					<Text style={{ fontWeight: 400, fontSize: 22 }}>Weight</Text>
				</View>
				<TouchableOpacity
					style={styles.settingTitle}
					onPress={() => navigation.navigate("Weight")}>
					<Text style={{ fontWeight: 100, fontSize: 20 }}>{weight} kg</Text>
					<Entypo name="chevron-small-right" size={24} color="#525252" />
				</TouchableOpacity>
			</View>
			<View style={styles.settingField}>
				<View style={styles.settingTitle}>
					<MaterialCommunityIcons
						name="human-male-height-variant"
						size={24}
						color="#525252"
					/>
					<Text style={{ fontWeight: 400, fontSize: 22 }}>Height</Text>
				</View>
				<TouchableOpacity
					style={styles.settingTitle}
					onPress={() => navigation.navigate("Height")}>
					<Text style={{ fontWeight: 100, fontSize: 20 }}>{height} cm</Text>
					<Entypo name="chevron-small-right" size={24} color="#525252" />
				</TouchableOpacity>
			</View>
			<View style={styles.settingField}>
				<View style={styles.settingTitle}>
					<MaterialCommunityIcons
						name="calendar-account"
						size={24}
						color="#525252"
					/>
					<Text style={{ fontWeight: 400, fontSize: 22 }}>Age</Text>
				</View>
				<TouchableOpacity style={styles.settingTitle}>
					<Text style={{ fontWeight: 100, fontSize: 20 }}>{age}</Text>
					<Entypo name="chevron-small-right" size={24} color="#525252" />
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
export default SettingsScreen;

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fafafa",
	},
	textHeader: {
		fontSize: 25,
	},
	settingField: {
		justifyContent: "space-between",
		flexDirection: "row",
		width: "100%",
		paddingHorizontal: 20,
		backgroundColor: "#fafafa",
		paddingVertical: 20,
		borderBottomWidth: 1,
		borderBottomColor: "#e5e5e5",
	},
	settingTitle: {
		flexDirection: "row",
		alignItems: "center",
		gap: 5,
		color: "#525252",
	},
	settingValue: {
		color: "blue",
		fontSize: 20,
		fontWeight: "ultralight",
	},
});

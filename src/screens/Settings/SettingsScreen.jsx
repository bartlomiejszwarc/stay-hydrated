import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Button,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { setHeight, setWeight, setAge } from "../../redux/slices/storageSlice";

function SettingsScreen() {
	const dispatch = useDispatch();

	const navigation = useNavigation();
	const data = useSelector((state) => state.storage);
	useEffect(() => {
		const setInitialDataFromStorage = async () => {
			const weightFromStorage = (await AsyncStorage.getItem("weight")) || null;
			const heightFromStorage = (await AsyncStorage.getItem("height")) || null;
			const ageFromStorage = (await AsyncStorage.getItem("age")) || null;
			dispatch(setHeight(heightFromStorage));
			dispatch(setWeight(weightFromStorage));
			dispatch(setAge(ageFromStorage));
		};
		setInitialDataFromStorage();
	}, []);

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
					{data && (
						<Text style={{ fontWeight: 100, fontSize: 20 }}>
							{data.weight} kg
						</Text>
					)}
					{!data && (
						<Text style={{ fontWeight: 100, fontSize: 20 }}>-- kg</Text>
					)}
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
					{data && (
						<Text style={{ fontWeight: 100, fontSize: 20 }}>
							{data.height} cm
						</Text>
					)}
					{!data && (
						<Text style={{ fontWeight: 100, fontSize: 20 }}>-- cm</Text>
					)}
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
				<TouchableOpacity
					style={styles.settingTitle}
					onPress={() => navigation.navigate("Age")}>
					{data && (
						<Text style={{ fontWeight: 100, fontSize: 20 }}>{data.age}</Text>
					)}
					{!data && <Text style={{ fontWeight: 100, fontSize: 20 }}>--</Text>}
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

import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
	Switch,
} from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
	setHeight,
	setWeight,
	setAge,
	setGender,
	setAutoWaterIntakeEnabled,
} from "../../redux/slices/storageSlice";
import SuggestedWaterAmount from "../../components/SuggestedWaterAmount";
import { Ionicons } from "@expo/vector-icons";
import WaterAmountSetter from "../../components/WaterAmountSetter";

function SettingsScreen() {
	const dispatch = useDispatch();

	const navigation = useNavigation();
	const data = useSelector((state) => state.storage);
	const [dataLoaded, setDataLoaded] = useState(false);
	useEffect(() => {
		const setInitialDataFromStorage = async () => {
			const weightFromStorage = (await AsyncStorage.getItem("weight")) || null;
			const heightFromStorage = (await AsyncStorage.getItem("height")) || null;
			const ageFromStorage = (await AsyncStorage.getItem("age")) || null;
			const genderFromStorage = (await AsyncStorage.getItem("gender")) || null;
			const autoWaterIntakeEnabled =
				(await AsyncStorage.getItem("autoWaterIntakeEnabled")) || null;

			dispatch(setHeight(heightFromStorage));
			dispatch(setWeight(weightFromStorage));
			dispatch(setAge(ageFromStorage));
			dispatch(setGender(genderFromStorage));
			dispatch(setAutoWaterIntakeEnabled(Boolean(autoWaterIntakeEnabled)));
		};
		setInitialDataFromStorage();
	}, [dispatch]);

	const toggleSwitch = () =>
		dispatch(setAutoWaterIntakeEnabled(!data.autoWaterIntakeEnabled));

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
					{data.weight && (
						<Text style={{ fontWeight: 100, fontSize: 20 }}>
							{data.weight} kg
						</Text>
					)}
					{!data.weight && (
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
					{data.height && (
						<Text style={{ fontWeight: 100, fontSize: 20 }}>
							{data.height} cm
						</Text>
					)}
					{!data.height && (
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
					{data.age && (
						<Text style={{ fontWeight: 100, fontSize: 20 }}>{data.age}</Text>
					)}
					{!data.age && (
						<Text style={{ fontWeight: 100, fontSize: 20 }}>--</Text>
					)}
					<Entypo name="chevron-small-right" size={24} color="#525252" />
				</TouchableOpacity>
			</View>
			<View style={styles.settingField}>
				<View style={styles.settingTitle}>
					<Ionicons name="person" size={24} color="#525252" />
					<Text style={{ fontWeight: 400, fontSize: 22 }}>Gender</Text>
				</View>
				<TouchableOpacity
					style={styles.settingTitle}
					onPress={() => navigation.navigate("Gender")}>
					{data.gender && (
						<Text style={{ fontWeight: 100, fontSize: 20 }}>{data.gender}</Text>
					)}
					{!data.gender && (
						<Text style={{ fontWeight: 100, fontSize: 20 }}>--</Text>
					)}
					<Entypo name="chevron-small-right" size={24} color="#525252" />
				</TouchableOpacity>
			</View>
			<View style={styles.settingField}>
				<View style={styles.settingTitle}>
					<Ionicons name="water-sharp" size={24} color="#525252" />
					<Text style={{ fontWeight: 400, fontSize: 22 }}>
						Calculate water intake
					</Text>
				</View>
				<Switch
					value={Boolean(data.autoWaterIntakeEnabled)}
					onValueChange={toggleSwitch}
				/>
			</View>
			{Boolean(data.autoWaterIntakeEnabled) && (
				<View style={styles.suggestedWaterAmountContainer}>
					<SuggestedWaterAmount data={data} />
				</View>
			)}
			{!Boolean(data.autoWaterIntakeEnabled) && (
				<View style={styles.suggestedWaterAmountContainer}>
					<WaterAmountSetter />
				</View>
			)}
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
	suggestedWaterAmountContainer: {
		width: "100%",
		flexDirection: "row",
		justifyContent: "center",
		paddingTop: 10,
	},
});

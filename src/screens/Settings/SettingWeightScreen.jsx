import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TextInput,
	TouchableOpacity,
} from "react-native";
import { useState } from "react";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { setWeight } from "../../redux/slices/storageSlice";

function SettingWeightScreen() {
	const [weightInput, setWeightInput] = useState();
	const navigation = useNavigation();
	const store = useSelector((state) => state.storage);
	const dispatch = useDispatch();

	const handleInputOnChange = (e) => {
		setWeightInput(e);
	};

	const handleInputOnSubmit = async () => {
		try {
			dispatch(setWeight(weightInput));
		} catch (e) {}
	};

	return (
		<SafeAreaView style={styles.container}>
			<TouchableOpacity onPress={() => navigation.navigate("Settings")}>
				<Entypo
					name="chevron-small-left"
					size={42}
					color="black"
					style={{ paddingLeft: 10 }}
				/>
			</TouchableOpacity>
			<View style={styles.settingField}>
				<View style={styles.settingTitle}>
					<Text style={{ fontWeight: 400, fontSize: 22 }}>Weight</Text>
				</View>
				<TouchableOpacity style={styles.settingTitle}>
					<TextInput
						keyboardType="number-pad"
						maxLength={3}
						autoFocus
						onChangeText={(e) => handleInputOnChange(e)}
						style={{ fontWeight: 100, fontSize: 20 }}
						defaultValue={store.weight}></TextInput>
					<Text>kg</Text>
				</TouchableOpacity>
			</View>
			<View style={styles.buttonFlexContainer}>
				<TouchableOpacity
					style={styles.submitButton}
					onPress={handleInputOnSubmit}>
					<Text style={styles.submitButtonText}>Save</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fafafa",
	},
	buttonFlexContainer: {
		alignItems: "center",
	},
	textHeader: {
		fontSize: 25,
	},
	submitButton: {
		width: "40%",
		backgroundColor: "#0ea5e9",
		borderRadius: "100%",
		justifyContent: "center",
		alignItems: "center",
		marginTop: 20,
		paddingVertical: 5,
	},
	submitButtonText: {
		color: "#fafafa",
		fontWeight: "400",
		fontSize: 22,
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
export default SettingWeightScreen;

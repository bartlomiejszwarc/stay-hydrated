import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TouchableOpacity,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import { useSelector, useDispatch } from "react-redux";
import { setGender } from "../../redux/slices/storageSlice";

function SettingGenderScreen() {
	const navigation = useNavigation();
	const store = useSelector((state) => state.storage);
	const dispatch = useDispatch();

	const handleInputOnChange = (gender) => {
		dispatch(setGender(gender));
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
					<Text style={{ fontWeight: 400, fontSize: 22 }}>Gender</Text>
				</View>
				<TouchableOpacity style={styles.settingTitle}>
					<View style={styles.genderButtonsContainer}>
						<TouchableOpacity
							style={
								store.gender === "Male"
									? styles.genderOptionButtonActive
									: styles.genderOptionButtonInactive
							}
							onPress={() => {
								handleInputOnChange("Male");
							}}>
							<Text
								style={
									store.gender === "Male"
										? styles.genderOptionButtonContentActive
										: styles.genderOptionButtonContentInactive
								}>
								Male
							</Text>
						</TouchableOpacity>
						<TouchableOpacity
							style={
								store.gender === "Female"
									? styles.genderOptionButtonActive
									: styles.genderOptionButtonInactive
							}
							onPress={() => {
								handleInputOnChange("Female");
							}}>
							<Text
								style={
									store.gender === "Female"
										? styles.genderOptionButtonContentActive
										: styles.genderOptionButtonContentInactive
								}>
								Female
							</Text>
						</TouchableOpacity>
					</View>
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
	genderButtonsContainer: {
		flexDirection: "row",
	},
	genderOptionButtonInactive: {
		borderRadius: 20,
		backgroundColor: "#fafafa",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		marginHorizontal: 3,
		borderColor: "#e5e5e5",
		borderWidth: 1,
		paddingVertical: 4,
		paddingHorizontal: 20,
	},
	genderOptionButtonActive: {
		borderRadius: 20,
		backgroundColor: "#0ea5e9",
		justifyContent: "center",
		alignItems: "center",
		flexDirection: "row",
		marginHorizontal: 3,
		borderColor: "#e5e5e5",
		borderWidth: 0,
		paddingVertical: 4,
		paddingHorizontal: 20,
	},
	genderOptionButtonContentInactive: {
		fontSize: 16,
		color: "#262626",
	},
	genderOptionButtonContentActive: {
		fontSize: 16,
		color: "#fafafa",
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
		borderWidth: 0,
		fontSize: 20,
		fontWeight: "ultralight",
	},
});
export default SettingGenderScreen;

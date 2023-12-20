import { View, StyleSheet, TouchableOpacity } from "react-native";
import { Picker } from "react-native-wheel-pick";
import { useState, useEffect } from "react";
import { useStoreData } from "../hooks/useStoreData";
import * as SQLite from "expo-sqlite";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { addWaterAmount } from "../redux/slices/storageSlice";
import { useDispatch } from "react-redux";

const db = SQLite.openDatabase("database.db");

function AmountPicker() {
	const [amount, setAmount] = useState(250);
	const { storeData } = useStoreData();
	const dispatch = useDispatch();

	useEffect(() => {
		db.transaction((tx) => {
			//tx.executeSql("DROP TABLE IF EXISTS records");
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS records (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, time TEXT, value INTEGER);"
			);
		});
	}, []);

	const storeDataInDatabase = async () => {
		dispatch(addWaterAmount(amount));
		await storeData(amount);
	};

	return (
		<View style={styles.container}>
			<Picker
				style={{ backgroundColor: "transparent", width: 300, height: 215 }}
				selectedValue={250}
				pickerData={[100, 150, 200, 250, 300, 350, 400, 450, 500]}
				onValueChange={(value) => {
					setAmount(value);
				}}
			/>
			<TouchableOpacity
				style={styles.customButton}
				onPress={storeDataInDatabase}>
				<MaterialCommunityIcons
					name="water-plus-outline"
					size={42}
					color="#fafafa"
				/>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	container: {
		justifyContent: "center",
		alignItems: "center",
	},
	customButton: {
		backgroundColor: "#0ea5e9",
		width: "100%",
		justifyContent: "center",
		padding: 10,
		borderRadius: "100%",
		shadowColor: "black",
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.2,
		shadowRadius: 5,
	},
});
export default AmountPicker;

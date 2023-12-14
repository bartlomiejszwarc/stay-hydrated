import { View, Text, TextInput, Button } from "react-native";
import { Picker } from "react-native-wheel-pick";
import { useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

function AmountPicker() {
	const [amount, setAmount] = useState(250);

	const deleteAllData = async () => {
		const allKeys = await AsyncStorage.getAllKeys();
		await AsyncStorage.multiRemove(allKeys);
	};

	const storeData = async () => {
		try {
			//await deleteAllData();
			var records = await AsyncStorage.getItem(
				new Date().toLocaleDateString("gb")
			);
			const intValue = parseInt(amount);
			if (!records) {
				const jsonValue = JSON.stringify([intValue]);
				await AsyncStorage.setItem(
					`${new Date().toLocaleDateString("gb")}`,
					jsonValue
				);
			}

			if (records) {
				const existingRecords = JSON.parse(records);
				const numericRecords = existingRecords.map((record) =>
					parseInt(record)
				);

				numericRecords.push(intValue);
				await AsyncStorage.setItem(
					`${new Date().toLocaleDateString("gb")}`,
					JSON.stringify(numericRecords)
				);
			}

			// await AsyncStorage.setItem("dailyGoal", JSON.stringify(3500));
			// await AsyncStorage.removeItem("dailyGoal");
		} catch (e) {
			console.log("Error: " + e);
		}
	};
	return (
		<View style={{ backgroundColor: "#fafafa" }}>
			<Picker
				style={{ backgroundColor: "#fafafa", width: 300, height: 215 }}
				selectedValue="250"
				pickerData={[100, 150, 200, 250, 300, 350, 400, 450, 500]}
				onValueChange={(value) => {
					setAmount(value);
				}}
			/>
			<Button title="Add" onPress={storeData}></Button>
		</View>
	);
}
export default AmountPicker;

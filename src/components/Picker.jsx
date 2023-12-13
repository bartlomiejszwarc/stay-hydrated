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
			const jsonValue = JSON.stringify(amount);
			await AsyncStorage.setItem(
				`${new Date().toLocaleDateString("gb")}`,
				jsonValue
			);

			//await AsyncStorage.setItem("dailyGoal", JSON.stringify(3500));
			//await AsyncStorage.removeItem("dailyGoal");
		} catch (e) {}
	};
	return (
		<View>
			<Picker
				style={{ backgroundColor: "white", width: 300, height: 215 }}
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

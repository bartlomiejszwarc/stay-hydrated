import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

export const useAsyncStorage = () => {
	const [storageHeight, setStorageHeight] = useState();
	const [storageWeight, setStorageWeight] = useState();
	const [storageAge, setStorageAge] = useState();

	useEffect(() => {
		const getData = async () => {
			const weight = await AsyncStorage.getItem("weight");
			const height = await AsyncStorage.getItem("height");
			const age = await AsyncStorage.getItem("age");
			setStorageHeight(height);
			setStorageAge(age);
			setStorageWeight(weight);
		};

		getData();
	}, []);

	return { storageHeight, storageWeight, storageAge };
};

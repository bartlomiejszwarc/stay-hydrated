import AsyncStorage from "@react-native-async-storage/async-storage";

export const useGetDailyAmount = () => {
	const getDataFromStorage = async () => {
		const todayFormatted = new Date().toLocaleDateString("gb");
		const todayData = await AsyncStorage.getItem(todayFormatted);
		return JSON.parse(todayData);
	};

	return { getDataFromStorage };
};

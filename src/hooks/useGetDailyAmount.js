import AsyncStorage from "@react-native-async-storage/async-storage";

export const useGetDailyAmount = () => {
	const getDataFromStorage = async () => {
		var dailyAmount = 0;
		const todayFormatted = new Date().toLocaleDateString("gb");
		const todayData = await AsyncStorage.getItem(todayFormatted);
		if (todayData) {
			const parsedTodayData = JSON.parse(todayData);
			parsedTodayData.forEach((record) => (dailyAmount += record));
		}
		return JSON.parse(dailyAmount);
	};

	return { getDataFromStorage };
};

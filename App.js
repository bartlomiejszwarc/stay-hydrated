import { StyleSheet, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/Home/HomeScreen";
import HistoryScreen from "./src/screens/History/HistoryScreen";
import SettingsScreen from "./src/screens/Settings/SettingsScreen";
import SettingWeightScreen from "./src/screens/Settings/SettingWeightScreen";
import SettingHeightScreen from "./src/screens/Settings/SettingHeightScreen";
import SettingAgeScreen from "./src/screens/Settings/SettingAgeScreen";
import SettingGenderScreen from "./src/screens/Settings/SettingGenderScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeader from "./src/components/NavigationHeader";
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
import "react-native-gesture-handler";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import * as SQLite from "expo-sqlite";
import { useEffect } from "react";

const db = SQLite.openDatabase("database2.db");

const Stack = createNativeStackNavigator();

export default function App() {
	useEffect(() => {
		db.transaction((tx) => {
			tx.executeSql(
				"CREATE TABLE IF NOT EXISTS records (id INTEGER PRIMARY KEY AUTOINCREMENT, date TEXT, time TEXT, value INTEGER);"
			);
		});
	}, []);
	return (
		<GestureHandlerRootView style={{ flex: 1 }}>
			<Provider store={store}>
				<SafeAreaView style={styles.container}>
					<NavigationContainer>
						<Stack.Navigator
							screenOptions={{
								headerShown: false,
							}}>
							<Stack.Screen name="Home" component={HomeScreen} />
							<Stack.Screen name="History" component={HistoryScreen} />
							<Stack.Screen name="Settings" component={SettingsScreen} />
							<Stack.Screen name="Weight" component={SettingWeightScreen} />
							<Stack.Screen name="Height" component={SettingHeightScreen} />
							<Stack.Screen name="Age" component={SettingAgeScreen} />
							<Stack.Screen name="Gender" component={SettingGenderScreen} />
						</Stack.Navigator>

						<NavigationHeader />
					</NavigationContainer>
				</SafeAreaView>
			</Provider>
		</GestureHandlerRootView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fafafa",
	},
});

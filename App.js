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

const Stack = createNativeStackNavigator();

export default function App() {
	return (
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
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fafafa",
	},
});

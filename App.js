import { StyleSheet, SafeAreaView } from "react-native";
import HomeScreen from "./src/screens/Home/HomeScreen";
import HistoryScreen from "./src/screens/History/HistoryScreen";
import SettingsScreen from "./src/screens/Settings/SettingsScreen";
import SettingWeightScreen from "./src/screens/Settings/SettingWeightScreen";
import SettingHeightScreen from "./src/screens/Settings/SettingHeightScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import NavigationHeader from "./src/components/NavigationHeader";
const Stack = createNativeStackNavigator();

export default function App() {
	return (
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
				</Stack.Navigator>
				<NavigationHeader />
			</NavigationContainer>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: "#fafafa",
	},
});

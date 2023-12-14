import {
	StyleSheet,
	Text,
	View,
	SafeAreaView,
	TextInput,
	Button,
} from "react-native";
function HistoryScreen() {
	return (
		<SafeAreaView>
			<View style={styles.container}>
				<Text>History Screen</Text>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		backgroundColor: "#fafafa",
	},
});
export default HistoryScreen;

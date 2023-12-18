import {
	StyleSheet,
	Text,
	View,
	ScrollView,
	SafeAreaView,
	TextInput,
	Button,
} from "react-native";
import { useGetAllRecords } from "../../hooks/useGetAllRecords";

import HistoryRecord from "../../components/HistoryRecord";
function HistoryScreen() {
	const { records } = useGetAllRecords();

	return (
		<SafeAreaView>
			<ScrollView style={styles.container}>
				<View style={styles.titlesContainer}>
					<Text style={styles.title}>Date</Text>
					<Text style={styles.title}>Amount</Text>
				</View>
				{records.map((record, index) => (
					<HistoryRecord record={record} key={index} />
				))}
			</ScrollView>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		height: "100%",
		backgroundColor: "#fafafa",
		paddingVertical: 10,
	},
	titlesContainer: {
		justifyContent: "space-between",
		alignContent: "space-between",
		flexDirection: "row",
		paddingHorizontal: 14,
		paddingVertical: 10,
	},
	title: {
		fontSize: 15,
		fontWeight: "200",
	},
	dateText: {
		fontSize: 28,
		color: "#262626",
	},
	dateContainer: {
		borderTopWidth: 1,
		borderBottomWidth: 1,
		borderColor: "#d4d4d4",
		paddingVertical: 4,
		backgroundColor: "#f5f5f5",
		paddingHorizontal: 4,
	},
});
export default HistoryScreen;

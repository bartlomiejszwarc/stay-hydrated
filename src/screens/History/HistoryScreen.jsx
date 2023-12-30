import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import { useGetAllRecords } from "../../hooks/useGetAllRecords";
import HistoryRecord from "../../components/History/HistoryRecord";
import { setRecords } from "../../redux/slices/recordsSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

function HistoryScreen() {
	const { records } = useGetAllRecords();
	const store = useSelector((state) => state.records);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(setRecords(records));
	}, [records]);

	return (
		<SafeAreaView>
			<View style={styles.titlesContainer}>
				<Text style={styles.title}>Date</Text>
				<Text style={styles.title}>Amount</Text>
			</View>
			<View style={styles.container}>
				<FlatList
					data={store.records}
					renderItem={({ item }) => <HistoryRecord record={item} />}
					keyExtractor={(item) => item.id}
				/>
			</View>
		</SafeAreaView>
	);
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#fafafa",
		height: "100%",
	},
	titlesContainer: {
		justifyContent: "space-between",
		alignContent: "space-between",
		flexDirection: "row",
		paddingHorizontal: 14,
		backgroundColor: "#fafafa",
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

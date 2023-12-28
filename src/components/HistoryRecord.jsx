import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDeleteRecord } from "./../hooks/useDeleteRecord";

function HistoryRecord({ record }) {
	const { deleteRecord } = useDeleteRecord();

	return (
		<View style={styles.wrapper}>
			<View style={styles.container}>
				<MaterialIcons name="local-drink" size={36} color="#0ea5e9" />
				<View style={styles.dateContainer}>
					<Text style={styles.dateText}>{record.date}</Text>
					<Text style={styles.dateText}>{record.time}</Text>
				</View>
			</View>
			<TouchableOpacity
				style={styles.recordsContainer}
				onPress={() => deleteRecord(record.id)}>
				<Text style={styles.recordText}>{record.value} ml</Text>
			</TouchableOpacity>
		</View>
	);
}
const styles = StyleSheet.create({
	wrapper: {
		flexDirection: "row",
		width: "100%",
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
	},
	dateText: {
		fontSize: 16,
		color: "#737373",
		fontWeight: "300",
	},
	recordText: {
		fontSize: 20,
		color: "black",
		paddingVertical: 1,
		fontWeight: "200",
	},
	container: {
		marginTop: 5,
		marginBottom: 5,
		flexDirection: "row",
		alignItems: "center",
	},
	dateContainer: {
		paddingVertical: 4,
		paddingHorizontal: 6,
		marginTop: 5,
		marginBottom: 5,
		flexDirection: "column",
		alignItems: "flex-start",
	},
	recordsContainer: {
		paddingHorizontal: 4,
	},
});
export default HistoryRecord;

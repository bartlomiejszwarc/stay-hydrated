import {
	StyleSheet,
	Text,
	View,
	TouchableOpacity,
	Dimensions,
	Animated,
} from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useDeleteRecord } from "./../hooks/useDeleteRecord";
import { Swipeable } from "react-native-gesture-handler";
import { Ionicons } from "@expo/vector-icons";
import { removeFromRecords } from "./../redux/slices/recordsSlice";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
const windowWidth = Dimensions.get("window").width;

function HistoryRecord({ record }) {
	const { deleteRecord } = useDeleteRecord();
	const dispatch = useDispatch();

	const handleDeleteRecord = async () => {
		try {
			await deleteRecord(record.id);
			dispatch(removeFromRecords(record.id));
		} catch (e) {}
	};

	const rightPanel = (progress, dragX) => {
		const trans = dragX.interpolate({
			inputRange: [-50, 200],
			outputRange: [0, 150],
			extrapolate: "clamp",
		});

		return (
			<Animated.View style={styles.rightSwipeContainer}>
				<TouchableOpacity onPress={handleDeleteRecord}>
					<Animated.View
						style={{
							transform: [{ translateX: trans }],
						}}>
						<Animated.Text
							style={{
								transform: [{ translateX: trans }],
							}}>
							<Ionicons name="ios-trash-bin" size={24} color="#fafafa" />
						</Animated.Text>
					</Animated.View>
				</TouchableOpacity>
			</Animated.View>
		);
	};
	return (
		<Swipeable renderRightActions={rightPanel} activeOpacity={0.8}>
			<View style={styles.wrapper}>
				<View style={styles.container}>
					<MaterialIcons name="local-drink" size={36} color="#0ea5e9" />
					<View style={styles.dateContainer}>
						<Text style={styles.dateText}>{record.date}</Text>
						<Text style={styles.dateText}>{record.time}</Text>
					</View>
				</View>
				<TouchableOpacity style={styles.recordsContainer}>
					<Text style={styles.recordText}>{record.value} ml</Text>
				</TouchableOpacity>
			</View>
		</Swipeable>
	);
}
const styles = StyleSheet.create({
	wrapper: {
		flexDirection: "row",
		width: windowWidth,
		justifyContent: "space-between",
		alignItems: "center",
		paddingHorizontal: 10,
		backgroundColor: "#fafafa",
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
	rightSwipeContainer: {
		alignItems: "center",
		justifyContent: "center",
		backgroundColor: "#b91c1c",
		width: 50,
	},
});
export default HistoryRecord;

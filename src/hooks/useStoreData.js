import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("database.db");

export const useStoreData = () => {
	function padTo2Digits(num) {
		return String(num).padStart(2, "0");
	}
	const storeData = async (amount) => {
		try {
			const currentDate = new Date().toLocaleDateString("gb");
			const currentTime =
				padTo2Digits(new Date().getHours()) +
				":" +
				padTo2Digits(new Date().getMinutes());
			const intValue = parseInt(amount);

			db.transaction(
				(tx) => {
					tx.executeSql(
						"INSERT INTO records (date, time, value) VALUES (?, ?, ?)",
						[currentDate, currentTime, intValue],
						(_, { rowsAffected }) => {
							if (rowsAffected > 0) {
								console.log("Record inserted successfully");
							} else {
								console.log("Failed to insert record");
							}
						}
					);
				},
				(error) => {
					console.log("Error executing SQL: ", error);
				}
			);
		} catch (e) {
			console.log("Error: " + e);
		}
	};

	return { storeData };
};

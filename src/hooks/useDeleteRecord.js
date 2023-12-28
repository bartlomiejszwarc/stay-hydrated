import * as SQLite from "expo-sqlite";
const db = SQLite.openDatabase("database.db");

export const useDeleteRecord = () => {
	const deleteRecord = async (id) => {
		try {
			db.transaction(
				(tx) => {
					tx.executeSql(
						"DELETE FROM records WHERE id = ?",
						[id],
						(_, { rowsAffected }) => {
							if (rowsAffected > 0) {
								console.log("Record deleted successfully");
							} else {
								console.log("Failed to delete record");
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
	return { deleteRecord };
};

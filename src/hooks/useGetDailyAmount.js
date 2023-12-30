import * as SQLite from "expo-sqlite";
import { useState } from "react";
const db = SQLite.openDatabase("database.db");

export const useGetDailyAmount = () => {
	const [dailyAmount, setDailyAmount] = useState(0);
	const getData = async () => {
		const todayFormatted = new Date().toLocaleDateString("gb");

		try {
			db.transaction(
				(tx) => {
					tx.executeSql(
						"SELECT * FROM records WHERE date = ?",
						[todayFormatted],
						(_, { rows: { _array } }) => {
							setDailyAmount(0);
							_array.map((row) => {
								setDailyAmount((prev) => prev + row.value);
							});
						}
					);
				},
				(error) => {
					throw new Error("Error executing SQL: ", error);
				}
			);
		} catch (error) {}
	};

	return { getData, dailyAmount };
};

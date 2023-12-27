import * as SQLite from "expo-sqlite";
import { useEffect, useState } from "react";

const db = SQLite.openDatabase("database.db");

export const useGetAllRecords = () => {
	const [records, setRecords] = useState([]);

	useEffect(() => {
		const fetchDataFromDatabase = async () => {
			try {
				db.transaction(
					(tx) => {
						tx.executeSql(
							"SELECT * FROM records ORDER BY date DESC, time DESC",
							[],
							(_, { rows: { _array } }) => {
								setRecords(_array);
							}
						);
					},
					(error) => {
						throw new Error("Error executing SQL: ", error);
					}
				);
			} catch (error) {
				console.log("Error fetching data from database: ", error);
			}
		};

		fetchDataFromDatabase();
	}, []);

	return { records };
};

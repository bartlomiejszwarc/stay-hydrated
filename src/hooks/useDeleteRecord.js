import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('database.db');

export const useDeleteRecord = () => {
  const deleteRecord = async (id) => {
    try {
      db.transaction(
        (tx) => {
          tx.executeSql('DELETE FROM records WHERE id = ?', [id], (_) => {});
        },
        (error) => {
          throw Error('Error executing SQL: ', error);
        },
      );
    } catch (e) {}
  };
  return { deleteRecord };
};

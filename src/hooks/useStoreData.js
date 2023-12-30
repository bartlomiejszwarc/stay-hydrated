import * as SQLite from 'expo-sqlite';
const db = SQLite.openDatabase('database.db');

export const useStoreData = () => {
  function padTo2Digits(num) {
    return String(num).padStart(2, '0');
  }
  const storeData = async (amount) => {
    try {
      const currentDate = new Date().toLocaleDateString('gb');
      const currentTime = padTo2Digits(new Date().getHours()) + ':' + padTo2Digits(new Date().getMinutes());
      const intValue = parseInt(amount);

      db.transaction(
        (tx) => {
          tx.executeSql(
            'INSERT INTO records (date, time, value) VALUES (?, ?, ?)',
            [currentDate, currentTime, intValue],
            (_) => {},
          );
        },
        (error) => {
          throw new Error('Error executing SQL: ', error);
        },
      );
    } catch (e) {}
  };

  return { storeData };
};

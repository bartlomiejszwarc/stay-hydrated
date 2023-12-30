import ProgressCircle from 'react-native-progress-circle';
import { Text, View } from 'react-native';
import { useEffect } from 'react';
import { useGetDailyAmount } from '../../hooks/useGetDailyAmount';
import { setWaterAmount } from '../../redux/slices/storageSlice';
import { useSelector, useDispatch } from 'react-redux';

function DailyProgress({ dailyAmount }) {
  const { getData, dailyAmount: data } = useGetDailyAmount();
  const dispatch = useDispatch();
  const store = useSelector((state) => state.storage);

  useEffect(() => {
    const getDailyData = async () => {
      await getData();
    };
    getDailyData();
  }, []);
  useEffect(() => {
    dispatch(setWaterAmount(data));
  }, [data]);

  return (
    <View style={{ backgroundColor: '#fafafa' }}>
      <ProgressCircle
        percent={(store.waterAmount * 100) / dailyAmount}
        radius={100}
        borderWidth={12}
        color='#0ea5e9'
        shadowColor='#dbeafe'
        bgColor='#fafafa'
      >
        <Text style={{ fontSize: 28, fontWeight: 500, color: '#262626' }}>
          {Math.round((store.waterAmount * 100) / dailyAmount)}%
        </Text>
        <Text style={{ fontSize: 14, color: '#171717', fontWeight: 100 }}>
          {store.waterAmount}/{dailyAmount} ml
        </Text>
      </ProgressCircle>
    </View>
  );
}
export default DailyProgress;

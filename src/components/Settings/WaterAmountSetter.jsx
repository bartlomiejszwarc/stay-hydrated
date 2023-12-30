import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { AntDesign } from '@expo/vector-icons';
import { useDispatch, useSelector } from 'react-redux';
import { setSuggestedWaterAmount } from '../../redux/slices/storageSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';
function WaterAmountSetter() {
  const store = useSelector((data) => data.storage);
  const [defaultWaterIntake, setDefaultWaterIntake] = useState(2000);
  const dispatch = useDispatch();
  useEffect(() => {
    const setAmount = async () => {
      const value = await AsyncStorage.getItem('suggestedWaterAmount');
      if (JSON.parse(value) > 0) {
        dispatch(setSuggestedWaterAmount(value));
      } else {
        dispatch(setSuggestedWaterAmount(2000));
      }
    };
    setAmount();
  }, []);

  const handleOnPress = (value) => {
    const newValue = JSON.parse(store.suggestedWaterAmount) + value;
    dispatch(setSuggestedWaterAmount(newValue));
  };

  return (
    <View style={styles.circle}>
      <TouchableOpacity style={styles.button} onPress={() => handleOnPress(-100)}>
        <AntDesign name='minus' size={28} color='#fafafa' />
      </TouchableOpacity>
      <Text style={styles.amountText}>{store.suggestedWaterAmount} ml</Text>
      <TouchableOpacity style={styles.button} onPress={() => handleOnPress(100)}>
        <AntDesign name='plus' size={28} color='#fafafa' />
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: '100%',
  },
  circle: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    height: 'auto',
    width: '100%',
    paddingTop: 10,
  },
  amountText: {
    fontSize: 40,
    fontWeight: '100',
    paddingHorizontal: 15,
  },
  button: {
    width: 40,
    height: 40,
    borderRadius: '100%',
    backgroundColor: '#0ea5e9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default WaterAmountSetter;

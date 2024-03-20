import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Gyroscope } from 'expo-sensors';
import { useEffect, useState } from 'react';

export default function App() {
  const [{Gyro_x, Gyro_y, Gyro_z}, updateGyro] = useState({Gyro_x: 0, Gyro_y: 0, Gyro_z: 0});
  const [{Acc_x, Acc_y, Acc_z}, updateAcc] = useState({Acc_x: 0, Acc_y: 0, Acc_z: 0});
  

  useEffect(()=>{
    const gyra = Gyroscope.addListener(updateGyro);
    Gyroscope.setUpdateInterval(2000);
    const acc = Accelerometer.addListener(updateAcc);
    Accelerometer.setUpdateInterval(2000);
    return () => {
      gyra.remove();
      acc.remove();
    }
  },[])

  return (
    <View style={styles.container}>
      <View>
        <Text>Gyro_x: {Gyro_x}</Text>
        <Text>Gyro_y: {Gyro_y}</Text>
        <Text>Gyro_z: {Gyro_z}</Text>
      </View>
      <View>
        <Text>Acc_x: {Acc_x}</Text>
        <Text>Acc_y: {Acc_y}</Text>
        <Text>Acc_z: {Acc_z}</Text>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Icon name="certificate" size={30} color="#900" />
      <HomeScreen />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    marginHorizontal: 10,
    marginVertical: 50,
    borderColor: 'red',
    borderWidth: 2,
  },
});

import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

import HomeScreen from './src/screens/HomeScreen';

export default function App() {
  return (
    <>
    <View style={styles.container}>
      <StatusBar style="auto" />
      <HomeScreen />
    </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

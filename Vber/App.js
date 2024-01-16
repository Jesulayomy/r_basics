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
      <View style={{height: '10%', backgroundColor: "#7f5af0"}}>
        <Text>Lagos</Text>
        <Icon name="certificate" size={30} color="#900" />
      </View>
      <View style={{height: '10%', backgroundColor: "#7f5af0"}}>
        <Text>Ibadan</Text>
        <Icon name="user" size={50} color="#16161a" />
      </View>
      <View style={{height: '10%', backgroundColor: "#7f5af0"}}>
        <Text>Abeokuta</Text>
        <Icon name="certificate" size={30} color="#900" />
      </View>
      <View style={{height: '10%', backgroundColor: "#7f5af0"}}>
        <Text>Funaab</Text>
        <Icon name="user" size={50} color="#16161a" />
      </View>
      <View style={{height: '10%', backgroundColor: "#7f5af0"}}>
        <Text>Jos</Text>
        <Icon name="certificate" size={30} color="#900" />
      </View>
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

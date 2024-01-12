import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default function App() {
  return <MainApp />;
}

function MainApp() {
  const [count, setCount] = useState(0);

  const incrementCount = () => {
    setCount(count + 1);
  };

  return (
    <View style={styles.container}>
      <Text>Hello, World</Text>
      <Text style={styles.number}>{count}</Text>
      <CounterButton incrementCount={incrementCount} />
      <StatusBar style="auto" />
    </View>
  );
}

function CounterButton({ incrementCount }) {
  return (
    <TouchableOpacity onPress={incrementCount} style={styles.button}>
      <Text style={styles.buttonText}>Increment</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  number: {
    fontSize: 24,
    marginVertical: 20,
  },
  button: {
    backgroundColor: '#3498db',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
  },
});

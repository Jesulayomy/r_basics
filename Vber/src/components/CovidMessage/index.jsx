import React from "react";
import { View, Text } from "react-native";

import styles from  "./styles";

const CovidMessage = (props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Travel only if necessary</Text>
      <Text style={styles.text}>
        For that matter, using a function-based view is easier,
        because the PasswordChangeForm is slightly different.
        It does not inherit from ModelForm and it takes a
        user argument in its constructor.
      </Text>
      <Text style={styles.learnMore}>Learn more</Text>
    </View>
  );
};

export default CovidMessage;

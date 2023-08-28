import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const NumberButton = ({ number, onPress }) => {
  return (
    <TouchableOpacity
      style={styles.button}
      // onPress={() => alert(number)}
    >
      <Text style={styles.buttonText}>{number}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 80,
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor: "#e0e0e0",
    margin: 5,

    borderRadius: 100000,
    fontSize: 15,
  },
  buttonText: {
    fontSize: 25,
    fontFamily: "RBold",
  },
});

export default NumberButton;

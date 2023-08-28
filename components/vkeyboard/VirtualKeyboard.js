import React from "react";
import { View, StyleSheet } from "react-native";
import NumberButton from "./NumberButton";

const VirtualKeyboard = ({ onNumberPress }) => {
  const numberButtons = [1, 2, 3, 4, 5, 6, 7, 8, 9, ".", 0, "<"];

  return (
    <View style={styles.keyboard}>
      {numberButtons.map((number) => (
        <NumberButton
          key={number}
          number={number}
          // onPress={onNumberPress}
        />
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  keyboard: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 50,
  },
});

export default VirtualKeyboard;

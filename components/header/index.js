import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";

const Header = ({ darkmode }) => {
  return (
    <View
      style={{
        width: "98%",
        flexDirection: "row",
        justifyContent: "space-between",
        marginLeft: 0,
        marginRight: 0,
        alignSelf: "center",
        backgroundColor: "#121212",
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          gap: 5,
        }}
      >
        <View style={{ flexDirection: "column" }}>
          <Text
            style={{
              color: darkmode ? "white" : "#121212",
              fontSize: 25,
              fontFamily: "RBold",
              marginLeft: 15,
            }}
          >
            Hi, Christopher
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "grey",
            borderRadius: 10,
            height: 50,
            width: 50,
          }}
        >
          <Image
            source={require("./../../assets/images/me.png")}
            style={{ height: 50, width: 50 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});

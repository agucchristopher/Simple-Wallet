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
              fontSize: 15,
              fontFamily: "RBold",
            }}
          >
            Hi, Username
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: "row", gap: 10 }}>
        <TouchableOpacity
          style={{
            backgroundColor: "grey",
            borderRadius: 45,
            height: 45,
            width: 45,
          }}
        >
          <Image
            source={require("./../../assets/images/me.png")}
            style={{ height: 45, width: 45 }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            backgroundColor: "grey",
            borderRadius: 45,
            height: 45,
            width: 45,
          }}
        >
          <Image
            source={require("./../../assets/images/me.png")}
            style={{ height: 45, width: 45 }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({});

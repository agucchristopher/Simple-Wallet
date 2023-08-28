import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
const Transfer = () => {
  return (
    <View>
      <StatusBar backgroundColor="#99ff1d" />
      <View
        style={{
          margin: 0,
          height: 200,
          backgroundColor: "#99ff1d",
          padding: 8,
          paddingTop: 20,
          opacity: 0.8,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            // justifyContent: "space-between",
            width: "100%",
            alignContent: "center",
          }}
        >
          <TouchableOpacity>
            <Svg width={30} height={30} viewBox="0 0 20 20">
              <Path
                d="M10.8284 12.0007L15.7782 16.9504L14.364 18.3646L8 12.0007L14.364 5.63672L15.7782 7.05093L10.8284 12.0007"
                fill="#000"
              />
            </Svg>
          </TouchableOpacity>
          <Text
            style={{
              textAlign: "center",
              marginLeft: "30%",
              alignSelf: "center",
              justifyContent: "center",
              fontFamily: "RBold",
              fontSize: 20,
              gap: 20,
            }}
          >
            Transfer
          </Text>
          <Text style={{ justifyContent: "center" }}></Text>
        </View>
        <Text
          style={{
            textAlign: "center",
            alignSelf: "center",
            justifyContent: "center",
            fontFamily: "RBold",
            fontSize: 35,
            margin: 20,
            marginTop: 30,
          }}
        >
          $ 1,000.00{" "}
        </Text>
      </View>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({});

import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { SafeAreaView } from "react-native-safe-area-context";
import Svg, { Path } from "react-native-svg";
import { Line } from "../../components";
import VirtualKeyboard from "../../components/vkeyboard/VirtualKeyboard";
const Transfer = ({ navigation }) => {
  return (
    <View
      style={{ flex: 1, marginTop: Dimensions.get("window").height * 0.04 }}
    >
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
          <TouchableOpacity onPress={() => navigation.goBack()}>
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
              marginLeft: "35%",
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
          $100,000.00{" "}
        </Text>
      </View>
      <TouchableOpacity
        style={{
          flexDirection: "row",
          margin: 1,
          marginLeft: 0,
          alignSelf: "center",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{
            backgroundColor: "darkgrey",
            width: 50,
            height: 50,
            alignContent: "center",
            justifyContent: "center",
            borderRadius: 15,
            margin: 18,
            // marginRight: 8,
            opacity: 0.9,
          }}
        >
          <Svg
            style={{ alignSelf: "center", justifyContent: "center", gap: 5 }}
            width={25}
            height={25}
            viewBox="0 0 24 24"
          >
            <Path
              d="M18.0049 7H21.0049C21.5572 7 22.0049 7.44772 22.0049 8V20C22.0049 20.5523 21.5572 21 21.0049 21H3.00488C2.4526 21 2.00488 20.5523 2.00488 20V4C2.00488 3.44772 2.4526 3 3.00488 3H18.0049V7ZM4.00488 9V19H20.0049V9H4.00488ZM4.00488 5V7H16.0049V5H4.00488ZM15.0049 13H18.0049V15H15.0049V13Z"
              fill="#000"
            />
          </Svg>
        </View>
        <View
          style={{
            flexDirection: "column",
            margin: 18,
            marginLeft: 0,
            marginRight: 0,
          }}
        >
          <Text style={{ fontSize: 18, fontFamily: "RBold" }}>
            Cash Balance
          </Text>
          <Text style={{ fontSize: 15, fontFamily: "RMedium" }}>
            $23,000.00
          </Text>
        </View>
        <View
          style={{
            margin: 18,
            marginLeft: 80,
            justifyContent: "flex-end",
            alignSelf: "center",
            marginRight: 0,
          }}
        >
          <TouchableOpacity>
            <Svg width={30} height={35} viewBox="0 0 20 20">
              <Path
                d="M18.2073 9.04304 12.0002 2.83594 5.79312 9.04304 7.20733 10.4573 12.0002 5.66436 16.7931 10.4573 18.2073 9.04304ZM5.79297 14.9574 12.0001 21.1646 18.2072 14.9574 16.793 13.5432 12.0001 18.3361 7.20718 13.5432 5.79297 14.9574Z"
                fill="#000"
              />
            </Svg>
          </TouchableOpacity>
        </View>
      </TouchableOpacity>
      <Line />
      <VirtualKeyboard />
      <View style={{ alignItems: "flex-end" }}>
        <TouchableOpacity
          style={{
            paddingHorizontal: 50,
            backgroundColor: "black",
            height: 60,
            width: "85%",
            alignSelf: "center",
            borderRadius: 10000,
            margin: 10,
            alignContent: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "white",
              alignSelf: "center",
              justifyContent: "center",
              fontSize: 20,
              fontFamily: "RBold",
            }}
          >
            Send Money
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Transfer;

const styles = StyleSheet.create({});

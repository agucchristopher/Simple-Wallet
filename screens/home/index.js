import {
  FlatList,
  ScrollView,
  StyleSheet,
  Switch,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import { Header } from "../../components/";
import { StatusBar } from "expo-status-bar";
import Svg, { Path } from "react-native-svg";

const Home = ({ darkmode }) => {
  //   let isDarkmode = darkmode;
  const [eyeOpen, seteyeOpen] = useState(true);
  const [isDarkmode, setisDarkmode] = useState(darkmode);
  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDarkmode ? "#121212" : "white",
            height: "42%",
            borderBottomLeftRadius: 5,
            borderBottomRightRadius: 5,
          },
        ]}
      >
        <StatusBar
          style={!isDarkmode ? "dark" : "light"}
          backgroundColor={isDarkmode ? "#121212" : "white"}
        />
        <Header darkmode={isDarkmode} />
        <View
          style={{
            height: 120,
            backgroundColor: "#333333",
            margin: 20,
            borderRadius: 15,
            padding: 15,
          }}
        >
          <Text
            style={{
              fontFamily: "RBold",
              color: "white",
              marginBottom: 15,
              fontSize: 18,
            }}
          >
            All Accounts .{" "}
            <Text style={{ color: "darkgrey" }}>Total Balance</Text>
          </Text>
          <Text style={{ color: "white", fontSize: 30, fontFamily: "RBold" }}>
            $23,000.<Text style={{ fontSize: 20 }}>00</Text>
          </Text>
        </View>
        <View
          style={{
            alignContent: "center",
            justifyContent: "center",
            flexDirection: "row",
          }}
        >
          <FlatList
            // horizontal
            data={[
              {
                name: "Deposit",
                d: "M5 11H13V13H5V16L0 12L5 8V11ZM3.99927 18H6.70835C8.11862 19.2447 9.97111 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C9.97111 4 8.11862 4.75527 6.70835 6H3.99927C5.82368 3.57111 8.72836 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C8.72836 22 5.82368 20.4289 3.99927 18Z",
              },
              {
                name: "Withdraw",
                d: "M10 11V8L15 12L10 16V13H1V11H10ZM2.4578 15H4.58152C5.76829 17.9318 8.64262 20 12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C8.64262 4 5.76829 6.06817 4.58152 9H2.4578C3.73207 4.94289 7.52236 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C7.52236 22 3.73207 19.0571 2.4578 15Z",
              },
              {
                name: "Transfer",
                d: "M16.0503 12.0498L21 16.9996L16.0503 21.9493L14.636 20.5351L17.172 17.9988L4 17.9996V15.9996L17.172 15.9988L14.636 13.464L16.0503 12.0498ZM7.94975 2.0498L9.36396 3.46402L6.828 5.9988L20 5.99955V7.99955L6.828 7.9988L9.36396 10.5351L7.94975 11.9493L3 6.99955L7.94975 2.0498Z",
              },
            ]}
            horizontal
            renderItem={({ item }) => {
              return (
                <TouchableOpacity
                  style={{
                    alignSelf: "center",
                    alignItems: "center",
                    justifyContent: "center",
                    // flexDirection: "row",
                    margin: 15,
                    // width: 0
                  }}
                >
                  <Svg width={38} height={30} viewBox="0 0 24 24">
                    <Path d={item.d} fill="#fff" />
                  </Svg>
                  <Text
                    style={{ color: "white", margin: 20, fontFamily: "RBold" }}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
              );
            }}
          />
        </View>
      </View>
      <ScrollView>
        <Switch
          value={isDarkmode}
          onValueChange={() => {
            //   darkmode = !darkmode;
            setisDarkmode(!isDarkmode);
          }}
          trackColor={{ true: "white", false: "#121212" }}
        />
        <Text style={{ color: !darkmode ? "white" : "black" }}>Home</Text>
      </ScrollView>
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingTop: 20,
  },
});

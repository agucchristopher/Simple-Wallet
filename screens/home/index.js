import {
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
            height: "20%",
            borderBottomLeftRadius: 30,
            borderBottomRightRadius: 30,
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
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <TouchableOpacity
            onPress={() => {
              seteyeOpen(!eyeOpen);
            }}
          >
            <Text
              style={{
                color: "white",
                fontFamily: "RBold",
                fontSize: 20,
                margin: 13,
                marginBottom: 0,
                marginTop: 9,
              }}
            >
              Balance: $ {eyeOpen ? "19,000" : "****"}
            </Text>
          </TouchableOpacity>

          <TouchableOpacity>
            <Text
              style={{
                color: "white",
                fontFamily: "RBold",
                fontSize: 13,
                margin: 15,
                //   marginTop: 0,
              }}
            >
              Transaction History {">"}
            </Text>
          </TouchableOpacity>
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
        <Text style={{ color: darkmode ? "white" : "black" }}>Home</Text>
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

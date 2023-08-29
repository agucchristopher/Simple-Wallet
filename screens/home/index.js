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
      </View>
      <ScrollView>
        <Text
          style={{
            color: "black",
            // fontWeight: "bold",
            fontFamily: "RBold",
            fontSize: 25,
            margin: 10,
          }}
        >
          Recent Transactions
        </Text>
        <FlatList
          data={["in", "out", "in", "in", "out", "out", "in", "in"]}
          renderItem={({ item }) => {
            return (
              <View
                style={{
                  flexDirection: "row",
                  margin: 10,
                  borderColor: "grey",
                  padding: 5,
                  borderRadius: 5,
                  borderWidth: 1.5,
                }}
              >
                <View style={{ margin: 5, marginRight: 15 }}>
                  <TouchableOpacity
                    style={{
                      backgroundColor: item == "out" ? "crimson" : "green",
                      borderRadius: 50,
                      height: 50,
                      width: 50,
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <Svg width={38} height={30} viewBox="0 0 24 24">
                      <Path
                        d={
                          item == "out"
                            ? "M16.0037 9.41421L7.39712 18.0208L5.98291 16.6066L14.5895 8H7.00373V6H18.0037V17H16.0037V9.41421Z"
                            : "M9 13.589L17.6066 4.98242L19.0208 6.39664L10.4142 15.0032H18V17.0032H7V6.00324H9V13.589Z"
                        }
                        fill="#fff"
                      />
                    </Svg>
                  </TouchableOpacity>
                </View>
                <View style={{ flexDirection: "column", gap: 5 }}>
                  <Text
                    style={{
                      fontFamily: "RBold",
                      fontSize: 20,
                      color: "#121212",
                    }}
                  >
                    Paypal Funding
                  </Text>
                  <Text
                    style={{
                      fontFamily: "RBold",
                      fontSize: 20,
                      color: "#121212",
                    }}
                  >
                    Fri 2nd September
                  </Text>
                </View>
                <Text
                  style={{
                    alignSelf: "flex-end",
                    justifyContent: "flex-end",
                    margin: 10,
                    fontFamily: "RBold",
                    fontSize: 23,
                    // color: "#FFFFFF",
                    marginLeft: 70,
                  }}
                >
                  $200
                </Text>
              </View>
            );
          }}
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

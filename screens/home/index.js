import {
  Dimensions,
  FlatList,
  Image,
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
import EmojiPicker from "../../components/modal/EmojiPicker";

const Home = ({ navigation }) => {
  let darkmode = true;
  const [eyeOpen, seteyeOpen] = useState(true);
  const [modalOpen, setmodalOpen] = useState(false);
  const [isDarkmode, setisDarkmode] = useState(darkmode);
  return (
    <>
      <View
        style={[
          styles.container,
          {
            backgroundColor: isDarkmode ? "#121212" : "white",
            height: "36%",
          },
        ]}
      >
        <StatusBar style={"dark"} backgroundColor={"black"} />
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
              onPress={() => navigation.navigate("Profile")}
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
        <View
          style={{
            height: 120,
            backgroundColor: "#333333",
            margin: 20,
            borderRadius: 15,
            padding: 15,
            opacity: 0.8,
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
          <Text
            onPress={() => seteyeOpen(!eyeOpen)}
            style={{ color: "white", fontSize: 30, fontFamily: "RBold" }}
          >
            ${eyeOpen ? "2,300,000" : "****"}{" "}
            <Text style={{ fontSize: 20 }}>.00</Text>
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
                  onPress={() => navigation.navigate("Transfer")}
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
      <ScrollView
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
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
              <TouchableOpacity
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
              </TouchableOpacity>
            );
          }}
        />
      </ScrollView>
      <EmojiPicker
        isVisible={modalOpen}
        onClose={() => {
          setmodalOpen(false);
        }}
      />
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 8,
    paddingTop: 20,
    marginTop: Dimensions.get("window").height * 0.04,
  },
});

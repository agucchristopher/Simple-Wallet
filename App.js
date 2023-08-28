import { StatusBar } from "expo-status-bar";
import {
  ActivityIndicator,
  Dimensions,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { useFonts } from "expo-font";
import { Home, Transfer } from "./screens";

export default function App() {
  const [fontsLoaded] = useFonts({
    RBold: require("./assets/fonts/Poppins-Bold.ttf"),
    RMedium: require("./assets/fonts/Poppins-Medium.ttf"),
    RRegular: require("./assets/fonts/Poppins-Regular.ttf"),
  });
  if (!fontsLoaded) {
    return (
      <ActivityIndicator
        color={"grey"}
        style={{
          alignSelf: "center",
          justifyCenter: "center",
          flex: 1,
          backgroundColor: "black",
          width: "100%",
        }}
        size={30}
      />
    );
  }
  console.log(StatusBar.height);
  return (
    <SafeAreaView style={styles.container}>
      <Transfer darkmode={true} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Dimensions.get("window").height * 0.04,
  },
});

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
import {
  createNativeStackNavigator,
  createStackNavigator,
} from "@react-navigation/stack";
import { useFonts } from "expo-font";
import { Home, Profile, Transfer } from "./screens";
import { NavigationContainer } from "@react-navigation/native";
export default function App() {
  const [fontsLoaded] = useFonts({
    RBold: require("./assets/fonts/Ubuntu-Bold.ttf"),
    RMedium: require("./assets/fonts/Ubuntu-Medium.ttf"),
    RRegular: require("./assets/fonts/Ubuntu-Regular.ttf"),
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
  const Stack = createStackNavigator();

  return (
    <>
      <StatusBar style="dark" backgroundColor="#121212" />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Transfer" component={Transfer} />
          {/* <Stack.Navigator screenOptions={{ presentation: "modal" }}> */}
          <Stack.Screen
            name="Profile"
            options={{
              presentation: "modal",
              animationEnabled: true,
              animationTypeForReplace: "pop",
            }}
            initialParams={{ presentation: "modal" }}
            component={Profile}
          />
          {/* </Stack.Navigator> */}
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Dimensions.get("window").height * 0.04,
  },
});

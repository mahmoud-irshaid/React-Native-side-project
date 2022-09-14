import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Provider } from "react-redux";
import { configureStore } from "@reduxjs/toolkit";
import test from "./test";
import txtstore from "./store";
import Screen2 from "./components/Screen2";
import Screen1 from "./components/Screen1";
import Screen3 from "./components/Screen3";
import Screen4 from "./components/Screen4";
import Screen6 from "./components/Screen6";
import Screen7 from "./components/Screen7";
// import Screen8 from "./components/Screen8";
import Screen9 from "./components/Screen9";

import { NavigationContainer, StackRouter } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

export default function App() {
  const store = configureStore({
    reducer: {
      test,
      txtstore,
    },
  });

  const Stack = createNativeStackNavigator();

  //  const RootStack = createStackNavigator();

  // const NavigationContainer = StackRouter({
  //   Screen1: { screen: Screen1 },
  //   HomeScreen: { screen: Screen2 },
  // });
  return (
    <Provider store={store}>
      <NavigationContainer initialScreen="Screen2">
        {/* <View style={styles.container}> */}
        {/* <Screen2 /> */}
        {/* <RootStack.Screen name="Screen2" component={Screen2} /> */}
        {/* <RootStack.Screen name="Screen1" component={Screen1} /> */}

        {/* <StatusBar style="auto" /> */}
        {/* </View> */}
        <Stack.Navigator>
          <Stack.Screen name="Screen2" component={Screen2} />
          <Stack.Screen name="Screen1" component={Screen1} />
          <Stack.Screen name="Screen3" component={Screen3} />
          <Stack.Screen name="Screen4" component={Screen4} />
          <Stack.Screen name="Screen6" component={Screen6} />
          <Stack.Screen name="Screen7" component={Screen7} />
          {/* <Stack.Screen name="Screen8" component={Screen8} /> */}
          <Stack.Screen name="Screen9" component={Screen9} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

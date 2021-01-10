/**
 * @format
 */
import "react-native-gesture-handler";
import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "react-native-splash-screen";
import RootNavigation from "./navigations/RootNavigation";

function App() {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 3000);
  }, []);
  return (
    <NavigationContainer>
      <RootNavigation></RootNavigation>
    </NavigationContainer>
  );
}

export default App;

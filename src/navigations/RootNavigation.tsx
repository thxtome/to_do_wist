import React, { useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from "react-native";
import LoginScreen from "../screens/LoginScreen";
import SignupScreen from "../screens/SignupScreen";
export type RootStackParamList = {
  Login: undefined;
  Signup: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Login">
      <Stack.Screen name="Login" component={LoginScreen} />
      <Stack.Screen name="Signup" component={SignupScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

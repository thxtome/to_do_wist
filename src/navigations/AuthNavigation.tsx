import React, { useEffect } from "react";
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
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";

export type AuthTabParamList = {
  Login: undefined;
  Signup: undefined;
};

const Tab = createMaterialTopTabNavigator<AuthTabParamList>();

const RootNavigation: React.FC = () => {
  return (
    <Tab.Navigator initialRouteName="Login">
      <Tab.Screen name="Login" component={LoginScreen} />
      <Tab.Screen name="Signup" component={SignupScreen} />
    </Tab.Navigator>
  );
};

export default RootNavigation;

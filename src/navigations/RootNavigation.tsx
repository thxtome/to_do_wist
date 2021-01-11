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
import HomeScreen from "../screens/HomeScreen";
import AuthNavigation from "../navigations/AuthNavigation";
export type RootStackParamList = {
  Auth: undefined;
  Home: undefined;
};
const Stack = createStackNavigator<RootStackParamList>();
const RootNavigation: React.FC = () => {
  return (
    <Stack.Navigator initialRouteName="Auth">
      <Stack.Screen
        name="Auth"
        component={AuthNavigation}
        options={{ headerShown: true, safeAreaInsets: { top: 0 } }}
      />
      <Stack.Screen name="Home" component={HomeScreen} />
    </Stack.Navigator>
  );
};

export default RootNavigation;

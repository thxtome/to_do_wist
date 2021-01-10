import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigations/RootNavigation";
const StyledLoginView = styled.View`
  background: white;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 20px;
`;

interface Props {
  navigation: StackNavigationProp<RootStackParamList, "Signup">;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <StyledLoginView>
      <StyledText>Signup Screen</StyledText>
      <Button
        title="a"
        onPress={() => {
          navigation.navigate("Login");
        }}
      ></Button>
    </StyledLoginView>
  );
};

export default LoginScreen;
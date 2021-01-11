import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "../navigations/RootNavigation";
const StyledHomeView = styled.View`
  background: white;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const StyledText = styled.Text`
  font-size: 20px;
`;

interface Props {
  navigation: StackNavigationProp<RootStackParamList, "Home">;
}

const HomeScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <StyledHomeView>
      <StyledText>Home Screen</StyledText>
      <Button
        title="a"
        onPress={() => {
          navigation.navigate("Home");
        }}
      ></Button>
    </StyledHomeView>
  );
};

export default HomeScreen;

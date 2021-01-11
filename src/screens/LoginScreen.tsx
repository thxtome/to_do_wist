import React from "react";
import { Button, TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthTabParamList } from "../navigations/AuthNavigation";
import InputBox from "../components/InputBox/InputBox";
const StyledLoginView = styled.View`
  background: white;
  flex: 1;
  justify-content: center;
  align-items: flex-start;
  padding-left: 20px;
  padding-right: 20px;
`;
const StyledLoginTextView = styled.View`
  background: white;
  justify-content: flex-start;
  align-items: flex-start;
  width: 100%;
  height: 30%;
`;

const StyledLoginButton = styled.TouchableOpacity`
  background: #27cd7e;
  width: 100%;
  height: 45px;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const StyledMainText = styled.Text`
  font-size: 40px;
  color: black;
  text-align: justify;
  margin-bottom: 20px;
`;

const StyledLoginText = styled.Text`
  font-size: 18px;
  color: white;
`;

interface Props {
  navigation: StackNavigationProp<AuthTabParamList, "Login">;
}

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <StyledLoginView>
      <StyledLoginTextView>
        <StyledMainText>우리도</StyledMainText>
        <StyledMainText>계획적으로</StyledMainText>
        <StyledMainText>살아보자</StyledMainText>
      </StyledLoginTextView>
      <InputBox text={"이메일"}></InputBox>
      <InputBox text={"비밀번호"}></InputBox>
      <StyledLoginButton>
        <StyledLoginText>로그인</StyledLoginText>
      </StyledLoginButton>
    </StyledLoginView>
  );
};

export default LoginScreen;

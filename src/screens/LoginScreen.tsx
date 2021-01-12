import React from "react";
import { Button, TouchableOpacity, Text, View } from "react-native";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthTabParamList } from "../navigations/AuthNavigation";
import InputBox from "../components/InputBox/InputBox";

interface Props {
  navigation: StackNavigationProp<AuthTabParamList, "Login">;
}

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
  justify-content: center;
  align-items: flex-start;
  width: 100%;
  flex: 5;
  position: relative;
  top: 30px;
`;

const StyledLoginButton = styled.TouchableOpacity`
  background: #27cd7e;
  width: 100%;
  height: 70%;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

const StyledLoginInputGroup = styled.View`
  width: 100%;
  flex: 3;
`;

const StyledFindPassText = styled.Text`
  margin-top: 10px;
  color: #999;
`;

const StyledMainText = styled.Text`
  font-size: 45px;
  color: black;
  text-align: justify;
  margin-bottom: 20px;
`;

const StyledLoginText = styled.Text`
  font-size: 18px;
  color: white;
`;

const StyledLoginButtonBox = styled.View`
  width: 100%;
  flex: 1;
`;

const StyledSoLogin = styled.View`
  font-size: 18px;
  width: 100%;
  color: white;
  flex: 2;
  flex-direction: row;
  justify-content: space-between;
`;

const StyledSoBox = styled.TouchableOpacity`
  width: 60px;
  height: 60px;
  background-color: gray;
`;

const LoginScreen: React.FC<Props> = ({ navigation }) => {
  return (
    <StyledLoginView>
      <StyledLoginTextView>
        <StyledMainText>우리도</StyledMainText>
        <StyledMainText>계획적으로</StyledMainText>
        <StyledMainText>살아보자</StyledMainText>
      </StyledLoginTextView>
      <StyledLoginInputGroup>
        <InputBox text={"이메일"}></InputBox>
        <InputBox text={"비밀번호"}></InputBox>
        <StyledFindPassText>비밀번호 계획적으로 찾기</StyledFindPassText>
      </StyledLoginInputGroup>
      <StyledLoginButtonBox>
        <StyledLoginButton>
          <StyledLoginText>로그인</StyledLoginText>
        </StyledLoginButton>
      </StyledLoginButtonBox>
      <StyledSoLogin>
        <StyledSoBox />
        <StyledSoBox />
        <StyledSoBox />
      </StyledSoLogin>
    </StyledLoginView>
  );
};

export default LoginScreen;

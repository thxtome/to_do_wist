import React from "react";
import { Button } from "react-native";
import styled from "styled-components/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { AuthTabParamList } from "../navigations/AuthNavigation";
import InputBox from "../components/InputBox/InputBox";

interface Props {
  navigation: StackNavigationProp<AuthTabParamList, "Signup">;
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
  flex: 4;
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
  flex: 4;
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
        <StyledMainText>자기 관리</StyledMainText>
        <StyledMainText>우리와 함께</StyledMainText>
      </StyledLoginTextView>
      <StyledLoginInputGroup>
        <InputBox text={"이메일"}></InputBox>
        <InputBox text={"비밀번호"}></InputBox>
        <InputBox text={"이름"}></InputBox>
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

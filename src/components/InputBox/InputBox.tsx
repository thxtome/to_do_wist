import React from "react";
import { View, TextInput } from "react-native";
import styled from "styled-components/native";

const StyledTextInput = styled(TextInput)`
  width: 100%;
  height: 100%;
  font-size: 18px;
`;

const StyledTextInputBox = styled(View)`
  width: 100%;
  height: 50px;
  background: white;
  border-bottom-width: 1px;
  border-bottom-color: #999999;
  padding-left: 10px;
  margin-bottom: 30px;
`;

interface Props {
  text: string;
}

const InputBox: React.FC<Props> = ({ text }) => {
  return (
    <StyledTextInputBox>
      <StyledTextInput placeholder={text}></StyledTextInput>
    </StyledTextInputBox>
  );
};

export default InputBox;

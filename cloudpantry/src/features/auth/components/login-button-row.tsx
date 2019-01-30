import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { loginScreenStyles, landingScreenStyles } from "../styles";

interface ButtonRowProps {
  loginUser: () => void;
  registerUser: () => void;
}

const LoginButtonRow = (props: ButtonRowProps) => {
  const {
    loginButtonStyle,
    touchableStyle,
    touchableTextStyle
  } = loginScreenStyles;
  const { buttonRowContainerStyle } = landingScreenStyles;
  return (
    <View style={buttonRowContainerStyle}>
      <View style={loginButtonStyle}>
        <TouchableOpacity style={touchableStyle} onPress={props.loginUser}>
          <Text style={touchableTextStyle}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={touchableStyle} onPress={props.registerUser}>
          <Text style={touchableTextStyle}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default LoginButtonRow;

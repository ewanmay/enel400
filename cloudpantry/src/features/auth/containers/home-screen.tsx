import * as React from "react";
import { Component } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { connect } from "react-redux";
import { NavigationScreenProp } from "react-navigation";

import { authActions } from "../../../ducks/auth";
import { homeScreenStyles } from "../styles";

interface RegisterScreenProps {
  email: string;
  password: string;
  loading: boolean;
  error: string;
  confirmation: string;
  user: {};
  emailChanged: (email: string) => {};
  passwordChanged: (password: string) => {};
  registerUser: (email: string, password: string, navigate: any) => {};
  navigation: NavigationScreenProp<any, any>;
}
class HomeScreen extends Component<RegisterScreenProps> {
  static navigationOptions = {
    header: null
  };

  scanReceipt() {
    this.props.navigation.navigate('Camera');
  }

  createMealPlan() {
    return null;
  }

  findRecipe() {
    return null;
  }

  render() {
    const {
      touchableContainerStyle,
      touchableTextStyle,
      buttonContainerStyle
    } = homeScreenStyles;

    return (
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          width: "100%"
        }}
      >
        <View style={buttonContainerStyle}>
          <TouchableOpacity
            style={touchableContainerStyle}
            onPress={() => this.scanReceipt()}
          >
            <Text style={touchableTextStyle}>
              {"Scan a receipt"}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={touchableContainerStyle}
            onPress={() => this.createMealPlan()}
          >
            <Text style={touchableTextStyle}>Create a meal plan</Text>
            <Image
              style={{ width: 20, height: 20 }}
              source={require("../../../../assets/images/planningIcon.png")}
            />
          </TouchableOpacity>
          <TouchableOpacity
            style={touchableContainerStyle}
            onPress={() => this.findRecipe()}
          >
            <Text style={touchableTextStyle}>Find a recipe</Text>
            <Image
              style={{ width: 40, height: 40 }}
              source={require("../../../../assets/images/searchIcon.png")}
            />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

interface stateProps {
  auth: {
    email: string;
    password: string;
    loading: boolean;
    error: string;
    confirmation: string;
    showPopup: boolean;
  };
}

const mapStateToProps = ({ auth }: stateProps) => {
  return {
    email: auth.email,
    password: auth.password,
    loading: auth.loading,
    error: auth.error,
    confirmation: auth.confirmation,
    showPopup: auth.showPopup
  };
};

export default connect(
  mapStateToProps,
  authActions
)(HomeScreen as any);

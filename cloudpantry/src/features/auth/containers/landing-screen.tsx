import * as React from "react";
import { Component } from "react";
import { View } from "react-native";
import { connect } from "react-redux";
import { HeaderProps } from "react-navigation";

import LoginCarousel from "../components/login-carousel";
import LoginButtonRow from "../components/login-button-row";
import { authActions } from "../../../ducks/auth";
import Header from "../../common/header";
import { landingScreenStyles } from "../styles";

class LandingScreen extends Component<any, any> {
  constructor(props: {}) {
    super(props);
    this.navigateTo = this.navigateTo.bind(this);
  }
  static navigationOptions = {
    title: "TelePorter",
    header: (props: Readonly<HeaderProps>) => <Header {...props} />,
    headerStyle: {
      backgroundColor: "transparent"
    },
    headerTitleStyle: {
      fontFamily: "titillium-web",
      color: "#fff"
    },
    headerTintColor: "#fff"
  };

  navigateTo(route: string) {
    this.props.stateNavigate();
    this.props.navigation.navigate(route);
  }

  render() {
    const { pageContainerStyle } = landingScreenStyles;
    return (
      <View style={pageContainerStyle}>
        <LoginCarousel />
        <LoginButtonRow
          loginUser={() => this.navigateTo("Login")}
          registerUser={() => this.navigateTo("Register")}
        />
      </View>
    );
  }
}

const mapStateToProps = (state: any) => {
  return { auth: state.auth };
};

export default connect(
  mapStateToProps,
  authActions
)(LandingScreen);

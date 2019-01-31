import { Provider } from "react-redux";
import createStore from "./src/utils/createStore";
import { setTopLevelNavigator } from "./src/utils/navigationService";
import AppStackNavigator from "./stack-navigator";
import { NavigationContainerComponent } from "react-navigation";
import React, { Component } from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import Amplify from 'aws-amplify';
import SplashScreen from 'react-native-splash-screen';

import aws_exports from './src/aws-exports';
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});


interface State {
  ready: boolean;
}
class App extends Component<{}, State> {
  constructor(props: State) {
    super(props);
    this.state = { ready: false };
    this.loadAppModules = this.loadAppModules.bind(this);
    this.store = createStore();
    this.initialRouter = "loginFlow";
  }
  
  private store = createStore();
  private initialRouter = "loginFlow";

  componentDidMount() {
    Amplify.configure(aws_exports);
    SplashScreen.hide();
  }
  async loadAppModules() {

  }


  createAppStackNavigator(initialRouter: string) {
    const AppStack = AppStackNavigator(initialRouter);
    return (
      <AppStack
        ref={(navigator: NavigationContainerComponent) => {
          setTopLevelNavigator(navigator);
        }}
      />
    );
  }

  render() {
      return (
        <View>
          <Text> Hello</Text>
        </View>
        // <Provider store={this.store}>
        //   {this.createAppStackNavigator(this.initialRouter)}
        // </Provider>
        
      );
    }
  }


export default App;
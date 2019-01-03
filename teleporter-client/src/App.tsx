import * as React from "react";
import { Component } from "react";
import * as firebase from "firebase";
import { Provider } from "react-redux";
import { AsyncStorage } from "react-native";
import { Font, AppLoading } from "expo";
import createStore from "./utils/createStore";
import { setTopLevelNavigator } from "./utils/navigationService";
import { saveState, loadState } from "./utils/statePersist";
import AppStackNavigator from "./stack-navigator";
import { NavigationContainerComponent } from "react-navigation";

interface State {
  ready: boolean;
}
class App extends Component<{}, State> {
  constructor(props: State) {
    super(props);
    this.state = { ready: false };
    this.loadAppModules = this.loadAppModules.bind(this);
  }

  public initialRouter = "loginFlow";
  public store = createStore();

  async componentDidMount() {
    const config = {
      apiKey: "AIzaSyCdRoP_UlWJsNa3uWtdYbMkSE0ggGmtT14",
      authDomain: "cloudpantry.firebaseapp.com",
      databaseURL: "https://cloudpantry.firebaseio.com",
      projectId: "cloudpantry",
      storageBucket: "cloudpantry.appspot.com",
      messagingSenderId: "551781432247"
    };
    firebase.initializeApp(config);
  }

  async loadAppModules() {
    await Font.loadAsync({
      "titillium-web": require("../assets/fonts/TitilliumWeb-Regular.ttf"),
      "titillium-web-bold": require("../assets/fonts/TitilliumWeb-Bold.ttf"),
      questrial: require("../assets/fonts/Questrial-Regular.ttf")
    });
    // const token = await AsyncStorage.getItem('fb_token');

    // if (token) {
    //   this.initialRouter = 'mainFlow'
    // }
    
    this.initialRouter = "mainFlow";
    return new Promise<void>(resolve => {
      firebase.auth().onAuthStateChanged(async user => {
        if (user) {
          // const state = await loadState();
          // this.store = createStore(state);
          // await this.store.subscribe(async () => {
          //   await saveState(this.store.getState());
          // });
        }
        resolve();
      });
    });
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
    if (this.state.ready) {
      return (
        <Provider store={this.store}>
          {this.createAppStackNavigator(this.initialRouter)}
        </Provider>
      );
    }
    return (
      <AppLoading
        startAsync={this.loadAppModules}
        onFinish={() => {
          this.setState({ ready: true });
        }}
        onError={console.warn}
      />
    );
  }
}

export default App;

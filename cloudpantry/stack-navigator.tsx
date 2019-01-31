import * as React from "react";
import {
  createStackNavigator,
  createMaterialTopTabNavigator
} from "react-navigation";
import Icon from "react-native-vector-icons/FontAwesome";
import { RecipeScreen } from "./src/features/recipes";
import { PlansScreen } from "./src/features/mealplans";

import { CameraScreen } from "./src/features/receipt-scan";
import { PantryScreen, CreateItemScreen, CreateGroupScreen } from "./src/features/pantry";
import {
  RegisterScreen,
  RegisterWithEmailScreen,
  LoginScreen,
  HomeScreen,
  LandingScreen
} from "./src/features/auth";


const AppStackNavigator = (initialRouter: string) =>
  createStackNavigator(
    {
      loginFlow: {
        screen: createStackNavigator(
          {
            Landing: LandingScreen,
            Register: RegisterScreen,
            Login: LoginScreen,
            RegisterWithEmail: RegisterWithEmailScreen
          },
          {
            initialRouteName: "Landing"
          }
        ),

        navigationOptions: () => ({
          header: null
        })
      },
      mainFlow: {
        screen: createMaterialTopTabNavigator(
          {
            Home: HomeScreen,
            "Meal Plans": PlansScreen,
            Pantry: createStackNavigator(
              {
                PantryHome: PantryScreen,
                CreateGroup: CreateGroupScreen,
                CreateItem: CreateItemScreen,
              },
              {
                initialRouteName: "PantryHome",
                navigationOptions: {
                  title: "",
                  headerStyle: {
                    backgroundColor: "transparent"
                  },
                  headerTintColor: "#fff"
                }
              }
            ),
            Recipes: RecipeScreen,
          },
          {
            initialRouteName: "Home",
            navigationOptions: ({ navigation }) => ({
              tabBarIcon: ({ focused, tintColor }) => {
                const { routeName } = navigation.state;
                let iconName;
                if (routeName === "Home") {
                  iconName = `ios-information-circle${
                    focused ? "" : "-outline"
                  }`;
                } else if (routeName === "Settings") {
                  iconName = `ios-options${focused ? "" : "-outline"}`;
                }

                // You can return any component that you like here! We usually use an
                // icon component from react-native-vector-icons
                return (
                  <Icon
                    name={iconName || ""}
                    size={25}
                    color={tintColor || "#aaa"}
                  />
                );
              }
            }),
            tabBarOptions: {
              indicatorStyle: {
                backgroundColor: "#55ad7a",
                height: 67
              },
              activeTintColor: "black",
              inactiveTintColor: "white",
              style: {
                backgroundColor: "#1e5d88",
                paddingTop: 20
              },
              labelStyle: {
                fontFamily: "titillium-web"
              }
            }
          }
        ),
        navigationOptions: () => ({
          header: null
        })
      },      
      Camera: CameraScreen
    },
    {
      initialRouteName: initialRouter
    }
  );

export default AppStackNavigator
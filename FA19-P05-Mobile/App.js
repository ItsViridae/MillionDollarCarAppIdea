import React, { Component } from "react";

import { Image } from "react-native";

import {
  createStackNavigator,
  createBottomTabNavigator,
  createAppContainer
} from "react-navigation";

import Home_Activity from "./screens/Home_Activity";
import Settings_Activity from "./screens/Settings_Activity";
import Login from "./screens/Login";
import Signup from "./screens/Signup";
import CartScreen from "./screens/CartScreen";
import SearchScreen from "./screens/SearchScreen.js";
const SearchTab = createStackNavigator(
  {
    Search: SearchScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#006978"
      },
      headerTintColor: "#FFFFFF",
      title: "Search"
    }
  }
);
const CartTab = createStackNavigator(
  {
    Cart: CartScreen
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#006978"
      },
      headerTintColor: "#FFFFFF",
      title: "Cart"
    }
  }
);
const HomeTab = createStackNavigator(
  {
    Home: Home_Activity,
    Login: Login,
    Signup: Signup
  },
  {
    defaultNavigationOptions: {
      header: null
    }
  }
);

const SettingsTab = createStackNavigator(
  {
    Settings: Settings_Activity
  },
  {
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#006978"
      },
      headerTintColor: "#FFFFFF",
      title: "Settings Tab"
    }
  }
);

const MainApp = createBottomTabNavigator(
  {
    Search: SearchTab,
    Home: HomeTab,
    Cart: CartTab,
    Settings: SettingsTab
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, horizontal, tintColor }) => {
        const { routeName } = navigation.state;
        if (routeName === "Home") {
          return (
            <Image
              source={require("./components/images/home.png")}
              style={{ width: 20, height: 20 }}
            />
          );
        } else if (routeName === "Settings") {
          return (
            <Image
              source={require("./components/images/setting.png")}
              style={{ width: 20, height: 20 }}
            />
          );
        } else if (routeName === "Cart") {
          return (
            <Image
              source={require("./components/images/Cart2.png")}
              style={{ width: 20, height: 20 }}
            />
          );
        } else if (routeName === "Search") {
          return (
            <Image
              source={require("./components/images/Search.png")}
              style={{ width: 20, height: 20 }}
            />
          );
        }
      }
    }),
    tabBarOptions: {
      activeTintColor: "#FF6F00",
      inactiveTintColor: "#263238"
    }
  }
);

export default createAppContainer(MainApp);

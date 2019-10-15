import React, { Component } from "react";
import AppNavigator from "./components/AppNavigator";
import { createAppContainer } from "react-navigation";
import { Home } from "./components/Home";

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return <AppContainer />;
  }
}

import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { StackNavigator } from "react-navigation";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { Home } from './components/Home';

import GestureRecognizer, {swipeDirections} from 'react-native-swipe-gestures';

export default class App extends React.Component {
  render() {
    return (
       <View style={styles.container}>
        <StatusBar backgroundColor="#007c91" barStyle="light-content" />
        <Signup />
       </View>
      //  <View style={styles.container}>
      //    <Home />
      //  </View> 
    );
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00acc1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

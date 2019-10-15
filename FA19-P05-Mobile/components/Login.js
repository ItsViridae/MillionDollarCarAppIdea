import React, { Component } from "react";
import Logo from "./Logo";
import Form from "./Form";
import Signup from "./Signup";
import { StyleSheet, Text, View, StatusBar } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form type="Login" />
        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Don't have an account yet? </Text>
          <Text
            style={styles.signupButton}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            Signup
          </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#00acc1",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  },
  signupTextCont: {
    flexGrow: 1,
    alignItems: "flex-end",
    justifyContent: "center",
    marginVertical: 20,
    flexDirection: "row"
  },
  signupText: {
    color: "rgba(225,225,255,0.7)",
    fontSize: 16
  },
  signupButton: {
    color: "#ffffff",
    fontSize: 16,
    fontWeight: "500"
  }
});

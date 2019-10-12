import React, { Component } from "react";
import Logo from "./Logo";
import Form from "./Form";
import { StyleSheet, Text, View, StatusBar } from "react-native";
export default class Login extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Logo />
        <Form />
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
  }
});

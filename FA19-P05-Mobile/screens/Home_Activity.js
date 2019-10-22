import React, { Component } from "react";

import { Text, View, TouchableOpacity, StyleSheet } from "react-native";
import Logo from "../components/Logo.js";
export default class Home_Activity extends Component {
  static navigationOptions = {
    title: "Home Activity"
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <Logo />

        <View
          style={{ flex: 1, justifyContent: "center", alignItems: "center" }}
        >
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Settings")}
          >
            <Text style={styles.text}>Go to settings Tab</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Login")}
          >
            <Text style={styles.text}>Go to Login Screen</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => this.props.navigation.navigate("Signup")}
          >
            <Text style={styles.text}>Go to Register Screen</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#00acc1",
    padding: 11
  },

  button: {
    alignItems: "center",
    backgroundColor: "#006978",
    padding: 12,
    width: 280,
    marginTop: 12
  },

  text: {
    color: "#fff"
  }
});

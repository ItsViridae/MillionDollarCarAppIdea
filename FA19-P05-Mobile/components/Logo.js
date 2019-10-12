import React, { Component } from "react";
import { StyleSheet, Text, View, StatusBar, Image } from "react-native";
import { bold } from "ansi-colors";
export default class Logo extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 70, height: 65 }}
          source={require("./images/Logo.png")}
        />
        <Text style={styles.logoText}>Welcome to Cars4U</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  logoText: {
    marginVertical: 10,
    fontSize: 18,
    fontWeight: "bold",
    color: "rgba(255, 255, 255, 0.7)"
  }
});

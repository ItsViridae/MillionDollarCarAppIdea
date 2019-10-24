import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image
} from "react-native";

export default class SearchScreen extends Component {
  static navigationOptions = {
    title: "Search",
    header: null
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <View
          style={{
            height: 63,
            justifyContent: "center",
            backgroundColor: "#006978",
            paddingHorizontal: 5,
            marginTop: 25
          }}
        >
          <View
            style={{
              height: 45,
              backgroundColor: "white",
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
              borderRadius: 35
            }}
          >
            <Image
              source={require("./images/Search.png")}
              style={{ width: 24, height: 24 }}
            />
            <TextInput placeholder="Search" style={{ fontSize: 16 }} />
          </View>
        </View>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1,
    backgroundColor: "#00acc1"
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

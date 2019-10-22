import React, { Component } from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import PeopleListTest from "../components/PeopleListTest";

export default class SearchScreen extends Component {
  static navigationOptions = {
    title: "Search"
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <PeopleListTest />
        <Text style={{ marginTop: 40, fontSize: 20 }}>Search Screen
        </Text>
        
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.navigate("Home")}
        >
          <Text style={styles.text}>Go to Home Tab</Text>
        </TouchableOpacity>
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

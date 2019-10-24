import React, { Component } from "react";

import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
  FlatList,
  Keyboard
} from "react-native";
import * as Animatable from "react-native-animatable";

const listItems = [
  "Toyota",
  "Acura",
  "Audi",
  "Mercedez",
  "BMW",
  "Honda",
  "Ford",
  "Cadilac",
  "Nissan",
  "Lexus"
];

export default class SearchScreen extends Component {
  static navigationOptions = {
    title: "Search",
    header: null
  };
  state = {
    searchBarFocused: false
  };
  componentDidMount() {
    this.keyboardDidShow = Keyboard.addListener(
      "keyboardDidShow",
      this.keyboardDidShow
    );
    this.keyboardDidHide = Keyboard.addListener(
      "keyboardDidHide",
      this.keyboardDidHide
    );
    this.keyboardWillShow = Keyboard.addListener(
      "keyboardWillShow",
      this.keyboardWillShow
    );
    this.keyboardWillHide = Keyboard.addListener(
      "keyboardWillHide",
      this.keyboardWillHide
    );
  }

  keyboardDidShow = () => {
    this.setState({ searchBarFocused: true });
  };
  keyboardDidHide = () => {
    this.setState({ searchBarFocused: false });
  };
  keyboardWillShow = () => {
    this.setState({ searchBarFocused: true });
  };
  keyboardWillHide = () => {
    this.setState({ searchBarFocused: false });
  };

  render() {
    return (
      <View style={styles.MainContainer}>
        <View
          style={{
            height: 63,
            justifyContent: "center",
            backgroundColor: "#00838f",
            paddingHorizontal: 5,
            marginTop: 25
          }}
        >
          <Animatable.View
            animation="slideInRight"
            duration={500}
            style={{
              height: 45,
              backgroundColor: "white",
              flexDirection: "row",
              padding: 5,
              alignItems: "center",
              borderRadius: 35
            }}
          >
            <Animatable.View
              animation={
                this.state.searchBarFocused ? "fadeInLeft" : "fadeInRight"
              }
            >
              <Image
                source={require("./images/Search.png")}
                style={{ width: 24, height: 24 }}
              />
            </Animatable.View>
            <TextInput
              placeholder="Search"
              style={{ fontSize: 18, marginLeft: 10, flex: 1 }}
            />
          </Animatable.View>
        </View>
        <FlatList
          style={{
            backgroundColor: this.state.searchBarFocused
              ? "rgba(0,0,0,0.3)"
              : "white"
          }}
          data={listItems}
          renderItem={({ item }) => (
            <Text style={{ padding: 20, fontSize: 20 }}>{item}</Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}
const styles = StyleSheet.create({
  MainContainer: {
    flex: 1
    //backgroundColor: "#00acc1"
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

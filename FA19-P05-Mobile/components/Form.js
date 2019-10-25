import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView,
  Keyboard
} from "react-native";
import { bold, italic } from "ansi-colors";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      passWord: ""
    };
  }
  myValidation = () => {
    const { userName, passWord } = this.state;
    if (userName == "") {
      this.setState({ Error: "User name cannot be empty." });
    } else if (passWord == "") {
      this.setState({ Error: "Password cannot be empty." });
    } else {
      alert("Your form is submitted.");
    }
    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", textAlign: "center" }}>
          {this.state.Error}
        </Text>
        <KeyboardAvoidingView>
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Username"
            placeholderTextColor="#ffffff"
            onChangeText={value => this.setState({ userName: value })}
          />
          <TextInput
            style={styles.inputBox}
            underlineColorAndroid="rgba(0,0,0,0)"
            placeholder="Password"
            secureTextEntry={true}
            placeholderTextColor="#ffffff"
            onChangeText={value => this.setState({ passWord: value })}
          />
        </KeyboardAvoidingView>
        <TouchableOpacity style={styles.button} onPress={this.myValidation}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  keyboard: {
    flex: 1
  },
  container: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    padding: 24
  },
  inputBox: {
    width: 300,
    height: 35,
    backgroundColor: "rgba(225,255,255,0.3)",
    borderRadius: 25,
    paddingHorizontal: 16,
    color: "#ffffff",
    marginVertical: 8,
    fontStyle: "italic",
    justifyContent: "flex-end"
  },
  button: {
    width: 200,
    backgroundColor: "#007c91",
    borderRadius: 25,
    marginVertical: 10,
    paddingVertical: 10
  },
  buttonText: {
    fontSize: 18,
    fontWeight: "500",
    color: "#ffffff",
    textAlign: "center"
  }
});

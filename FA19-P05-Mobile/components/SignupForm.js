import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  KeyboardAvoidingView
} from "react-native";
import { bold, italic } from "ansi-colors";
export default class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      email: "",
      name: "",
      password: "",
      confirmedPassword: ""
    };
  }
  handleSubmit = () => {
    const { password, confirmPassword } = this.state;
    // perform all neccassary validations
    if (password !== confirmPassword) {
      this.setState({ Error: "Passwords don't match" });
    } else {
      this.setState({ Error: "" });
      // some API call
    }
  };
  render() {
    return (
      <View style={styles.container}>
        <Text style={{ color: "red", textAlign: "center" }}>
          {this.state.Error}
        </Text>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Username"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Name"
          placeholderTextColor="#ffffff"
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          onChangeText={value => this.setState({ password: value })}
          //onChange={this.handleSubmit}
        />
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Confirmed Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          onChangeText={value => this.setState({ confirmPassword: value })}
        />
        <TouchableOpacity style={styles.button} onChange={this.handleSubmit}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
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
  inputBox: {
    width: 300,
    height: 35,
    backgroundColor: "rgba(225,255,255,0.3)",
    borderRadius: 25,
    paddingHorizontal: 16,
    color: "#ffffff",
    marginVertical: 8,
    fontStyle: "italic"
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

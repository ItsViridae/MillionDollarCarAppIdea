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
import { withFormik } from "formik";
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
    if (passWord == "" && userName == "") {
      this.setState({ Error: "Both user name and password cannot be empty." });
    } else if (passWord == "") {
      this.setState({ Error: "Password cannot be empty." });
    } else if (userName == "") {
      this.setState({ Error: "User name cannot be empty." });
    } else {
      alert("Your form is submitted.");
      this.setState({ Error: "" });
    }
    Keyboard.dismiss();
  };

  render() {
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Username"
          placeholderTextColor="#ffffff"
          // onChangeText={username =>
          //   this.props.setFieldValue("Username", username)
          //}
          onChangeText={value => this.setState({ userName: value })}
        />
        <Text style={{ color: "red", textAlign: "center", fontSize: 16 }}>
          {this.state.Error}
        </Text>

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#ffffff"
          // onChangeText={password =>
          //   this.props.setFieldValue("Password", password)
          // }
          onChangeText={value => this.setState({ passWord: value })}
        />
        {/* <Text style={{ color: "red", textAlign: "center" }}>
          {this.props.errors.password}
        </Text> */}
        <TouchableOpacity
          style={styles.button}
          // onPress={() => {
          //   this.props.handleSubmit;
          // }}
          onPress={this.myValidation}
        >
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
// export default withFormik({
//   mapPropsToValues: () => ({ username: "", passWord: "" }),
//   validate: (values, props) => {
//     const errors = {};
//     if (!values.username) {
//       errors.username = "User name cannot be empty.";
//     } else{
//       errors.username ="";
//     }
//     if (!values.password) {
//       errors.password = "Password cannot be empty.";
//     }
//     return errors;
//   },
//   handleSubmit: (values, { props }) => {
//     console.log(values);
//   }
// })(Form);

import React from "react";
import { StyleSheet, Text, View, TouchableOpacity, Alert } from "react-native";

export class Menu extends React.Component {
  goToHome = () => {
    {
      this.props.navigation.navigate("Home");
    }
  };
  goToSearch = () => {
    Alert.alert("Navigates To Search Menu");
  };
  goToCart = () => {
    Alert.alert("Navigates To Shopping Cart");
  };
  showLoggedOut = () => {
    Alert.alert("You've have Logged out \nHave a Good Day!");
  };
  goToWriteReview = () => {
    Alert.alert("Please leave us a Review about your experience below:");
  };

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.goToHome}>
            <Text style={styles.buttonText}> Home </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={this.goToSearch}
          >
            <Text style={styles.buttonText}> Search </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity style={styles.buttonStyles} onPress={this.goToCart}>
            <Text style={styles.buttonText}> My Cart </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.buttonStyles}
            onPress={this.showLoggedOut}
          >
            <Text style={styles.buttonText}> Sign-Out </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonRow}>
          <TouchableOpacity
            style={styles.bottomButton}
            onPress={this.goToWriteReview}
          >
            <Text style={styles.buttonText}> Write A Review </Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 6,
    backgroundColor: "#00acc1"
  },
  buttonRow: {
    flex: 2,
    flexDirection: "row",
    alignItems: "center",
    borderColor: "black",
    borderBottomWidth: 2
  },
  bottomButton: {
    flex: 1,
    backgroundColor: "#00acc1",
    height: "50%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonStyles: {
    backgroundColor: "#00acc1",
    height: "50%",
    width: "50%",
    justifyContent: "center",
    alignItems: "center"
  },
  buttonText: {
    color: "black",
    fontSize: 20
  }
});

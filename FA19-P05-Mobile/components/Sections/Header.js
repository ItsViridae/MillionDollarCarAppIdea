import React, { Component } from "react";
import { StyleSheet, Text, View, Image } from "react-native";


export default class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isSignedUp: false};
  }

  toggleUser = () => {
    this.setState(previousState => {
      return { isSignedUp: !previousState.isSignedUp };
    })
  }

  render() {
    let display = this.state.isSignedUp ? 'User' : this.props.message;
    return (
      <View style={styles.buttonRow}>
        <View style={styles.headStyle}>
            <Text
                style={styles.headText} 
                onPress={this.toggleUser}>{display}
            </Text>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
    headText: {
        textAlign: 'right',
        textAlignVertical: 'top',
        color: '#ffffff',
        fontSize: 20
    },
    headStyle: {
        paddingTop: 30,
        paddingBottom: 10,
        paddingRight: 10,
        backgroundColor: '#00acc1',
        flex: 2
    },
    buttonRow: {
      flex: 2,
      flexDirection: 'row',
      alignItems: 'center',
      borderColor: 'black',
      borderBottomWidth: 0,
      shadowColor: 'black',
      zIndex: 2
      
  }
});
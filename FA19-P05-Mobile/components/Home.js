import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Header from './Sections/Header';
import Logo from "./Logo";
import { Menu } from './Menu';

export class Home extends React.Component{
    render(){
        return (
            <View>
                <Header message = 'Login'/>
                <Logo />
                <Menu />
            </View>
        )
    }
}

const styles= StyleSheet.create({
    container: {
        flex: 1
    }
});

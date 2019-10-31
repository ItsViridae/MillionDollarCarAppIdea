import React, {Component, useState} from "react";
import { Image, Text } from "react-native";
import axios from 'axios';
import { Container, Header, Content, Card, Thumbnail, CardItem, Button, Icon, Left, Body, Right } from 'native-base';


export default class PeopleListTest extends Component {
        state = {
            people: [], name:''
        }
        
    componentDidMount() {
        this.makeApiRequest();
    }

    handleChange = event => {
        this.setState({people: event.target.value})
    }

    handleSubmit = event =>{
        event.preventDefault();

        const person ={
            name: this.state.name
        }
    }

    makeApiRequest = () => {
        const url = `https://jsonplaceholder.typicode.com/users`;
        this.setState({ loading: true });
        axios.get(url)
            .then(res => {
            const people = res.data;
            this.setState({ people });
    })
}
    render() {
        return(
        <ul>
        { people.map(person => <Card>{person.username}</Card>)}
      </ul>
        )
    }
}
import React, {Component} from "react";
import { Image, Text } from "react-native";
import axios from 'axios';
import { Container, Header, Content, Card, Thumbnail, CardItem, Button, Icon, Left, Body, Right } from 'native-base'


export default class CarListDemo extends Component{
    constructor(props) {
        super(props);

        this.state = {
            loading: false,
            make: 'honda',
            year: '2019',
            data: [],
            error: null,
        }
    }

    //const [CarState, setCarState] = {()}
    componentDidMount() {
        this.makeApiRequest();
    }

    makeApiRequest = () => {
        const { make, year } = this.state;
        const url = `https://www.carqueryapi.com/api/0.3/?callback=?&cmd=getModels&make=${make}&year=${year}&sold_in_us=1`;
        this.setState({ loading: true });
        axios.get(url)
            .then(res => {console.log(res);})
            .then(res => {
                this.setState({
                    data: null ? res.data : [...this.state.data, ...res.data],
                    error: res.error || null,
                    loading: false
                });
            })
            .catch(error => {
                this.setState({error, loading: false});
            });
    };
    render() {
        return(
            <Container>
                <Header />
                <Content>
                <Card>
                    <CardItem>
                    <Left>
                        <Thumbnail  source={{uri: './images/Honda/2019HondaInsight.jpg'}} />
                        <Body>
                        <Text>Honda</Text>
                        <Text note>Model</Text>
                        </Body>
                    </Left>
                    </CardItem>
                    <CardItem cardBody>
                    <Image source={{uri: './images/Honda/2019HondaInsightInterior.png'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <CardItem>
                    <Left>
                        <Button transparent>
                        <Icon active name="thumbs-up" />
                        <Text>12 Likes</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Button transparent>
                        <Icon active name="chatbubbles" />
                        <Text>4 Comments</Text>
                        </Button>
                    </Body>
                    <Right>
                        <Text>11h ago</Text>
                    </Right>
                    </CardItem>
                </Card>
                </Content>
            </Container>
        )
    }
}
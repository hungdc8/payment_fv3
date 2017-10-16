import React, { Component } from 'react'
import { Platform, StyleSheet, View, StatusBar } from 'react-native'
import { Card, CardItem, Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class HomeScreen extends Component<{}> {

    static navigationOptions = ({ navigation }) => ({
        header: (

            <Header style={{ backgroundColor: "#CC3227" }}>
                <Left>
                    <Button
                        transparent
                        onPress={() => navigation.navigate('DrawerOpen')}
                    >
                        <Icon style={{ color: "white" }} name="menu" />
                        {/* <Icon name='arrow-back' /> */}
                    </Button>
                </Left>

                <Body>
                    <Title style={{ color: "white" }}>Home</Title>
                </Body>

                <Right>
                    {/* <Button transparent> */}
                    {/* <Icon name='close' style={{ color: 'white', fontSize: 40 }} /> */}
                    {/* <Ionicons name='cancel' size={24} color='white' /> */}
                    {/* <MaterialIcons name="cancel" size={24} color='white' ></MaterialIcons> */}
                    {/* </Button> */}
                </Right>
            </Header>
        )
    })

    render() {
        const { navigate } = this.props.navigation
        return (
            <Container>

                <Content padder>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text style={{ color: '#FF8000', fontWeight: 'bold' }}>App Main Screens</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button danger bordered onPress={() => navigate('DrawerOpen')} style={{ alignSelf: 'center', marginTop: 20 }} >
                        <Text style={{ fontWeight: 'bold' }}>Menu</Text>
                    </Button>

                </Content>
            </Container>

        )
    }
}

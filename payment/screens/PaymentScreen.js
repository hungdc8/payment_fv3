import React, { Component } from 'react'
import { Platform, StyleSheet, View, StatusBar } from 'react-native'
import { Card, CardItem, Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'


export default class PaymentScreen extends Component<{}> {

    static navigationOptions = ({ navigation }) => ({
        header: (
            <Header style={{ backgroundColor: "#CC3227" }}>
                <Left>
                    <Button
                        transparent
                        onPress={() => navigation.navigate('DrawerOpen')}
                    >
                        {/* <MaterialIcons name="menu" size={27} color='white' ></MaterialIcons> */}
                        <Icon style={{ color: "white" }} name="menu" />
                        {/* <Icon style={{ color: "white" }} name="menu" /> */}
                        {/* <Icon name='arrow-back' /> */}
                    </Button>
                </Left>

                <Body>
                    <Title style={{ color: "white", fontSize: 18 }}>Payment</Title>
                </Body>

                <Right>
                    {/* <Button transparent>
                        {/* <Ionicons name='cancel' size={24} color='white' /> */}
                    {/* <MaterialIcons name="cancel" size={22} color='white' ></MaterialIcons> */}
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
                                <Text style={{ color: '#FF8000', fontWeight: 'bold' }}>Gói dịch vụ</Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Button block
                        style={{ marginTop: 10 }}
                        onPress={() => navigate('Vip')}
                    >
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Mua VIP</Text>
                    </Button>
                </Content>
            </Container>

        )
    }
}

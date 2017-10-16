import React, { Component } from 'react'
import { Platform, StyleSheet, View, StatusBar } from 'react-native'
import { List, ListItem, Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'

import { Ionicons } from '@expo/vector-icons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

export default class SlideMenuScreen extends Component<{}> {
    render() {

        return (
            <Content padder style={{ backgroundColor: "#CC3227" }}>

                <List style={{ marginTop: 10 }}>

                    <ListItem icon style={{ backgroundColor: '#CC3227' }}>
                        <Left>
                            {/* <Ionicons name='payment' size={24} color='red' /> */}
                            <MaterialIcons name="home" size={24} color='white' ></MaterialIcons>
                        </Left>
                        <Body>
                            <Text style={{ color: 'white', fontWeight: 'bold' }} onPress={() => this.props.navigation.navigate('Home')}>Home</Text>
                        </Body>
                    </ListItem>
                    <ListItem icon style={{ backgroundColor: "#CC3227" }}>
                        <Left>
                            {/* <Ionicons name='payment' size={24} color='red' /> */}
                            <MaterialIcons name="payment" size={24} color='white' ></MaterialIcons>
                        </Left>
                        <Body>
                            <Text style={{ color: 'white', fontWeight: 'bold' }} onPress={() => this.props.navigation.navigate('Payment')}>Payment</Text>
                        </Body>
                    </ListItem>


                </List>
            </Content>

        )
    }
}

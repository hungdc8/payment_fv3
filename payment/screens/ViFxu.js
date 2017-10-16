import React, { Component } from 'react'
import { Platform, StyleSheet, View, StatusBar } from 'react-native'
import {
    Card,
    CardItem,
    Drawer,
    Container,
    Header,
    Title,
    Content,
    Footer,
    FooterTab,
    Button, Left, Right, Body, Icon, Text, Tab, Tabs, TabHeading
} from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

import ViFxuVip from './ViFxuVip'
import GoiSMSVip from './GoiSMSVip'

export default class ViFxu extends Component<{}> {
    static navigationOptions = ({ navigation }) => ({
        // title: `${navigation.state.params.title}`,
        header: (
            <Header hasTabs style={{ backgroundColor: "#CC3227" }}>
                <Left>
                    <Button
                        transparent
                        onPress={() => navigation.goBack()}
                    >
                        <MaterialIcons name="arrow-back" size={27} color='white' ></MaterialIcons>
                        {/* <Icon style={{ color: "white" }} name="menu" /> */}
                        {/* <Icon name='arrow-back' /> */}
                    </Button>
                </Left>

                <Body>
                    <Title style={{ color: "white", fontSize: 17 }}>Vip Fshare</Title>
                </Body>

                <Right>
                    <Button transparent onPress={() => navigation.navigate('Payment')}>
                        <Icon name='close' style={{ color: 'white', fontSize: 40 }} />
                        {/* <Ionicons name='cancel' size={24} color='white' /> */}
                        {/* <MaterialIcons name="cancel" size={22} color='white' ></MaterialIcons> */}
                    </Button>
                </Right>

            </Header >


        )
    })
    render() {
        const { navigate } = this.props.navigation
        return (
            <Tabs locked initialPage={0} tabBarUnderlineStyle={{ backgroundColor: 'white' }}>
                <Tab heading={<TabHeading style={{ backgroundColor: '#CC3227' }}><Text style={{ color: 'white', fontWeight: 'bold' }} >Gói VIP</Text></TabHeading>}>
                    <ViFxuVip navigate={navigate} />
                </Tab>
                <Tab heading={<TabHeading style={{ backgroundColor: '#CC3227' }}><Text style={{ color: 'white', fontWeight: 'bold' }}>SMS VIP</Text></TabHeading>}>
                    <GoiSMSVip navigate={navigate} />
                </Tab>
            </Tabs>
        )
    }
}

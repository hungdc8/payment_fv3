import React, { Component } from 'react'
import { Platform, StyleSheet, View, StatusBar, ScrollView } from 'react-native'
import { Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'


import HomeScreen from './screens/HomeScreen'
import PaymentScreen from './screens/PaymentScreen'
import SlideMenuScreen from './screens/SlideMenuScreen'
import VipScreen from './screens/VipScreen'
import GoiVip from './screens/GoiVip'
import PhuongThucThanhToan from './screens/PhuongThucThanhToan'
import ThanhToan from './screens/ThanhToan'
import HoanThanh from './screens/HoanThanh'
import ViFxu from './screens/ViFxu'


import { StackNavigator, DrawerNavigator } from 'react-navigation'


const MyStackNavigator = StackNavigator(
  {
    Payment: { screen: PaymentScreen },
    Home: { screen: HomeScreen },
    Vip: { screen: VipScreen },
    GoiVip: { screen: GoiVip },
    PTTT: { screen: PhuongThucThanhToan },
    ThanhToan: { screen: ThanhToan },
    HoanThanh: { screen: HoanThanh },
    ViFxu: { screen: ViFxu }
  })

const MyDrawerNavigator = DrawerNavigator(
  {
    Home: { screen: MyStackNavigator },
  },
  {
    // initialRouteName: 'Payment',
    drawerWidth: 200,
    // contentOptions: {
    //   activeTintColor: 'red'
    // },
    contentComponent: props => <SlideMenuScreen  {...props} />
    // contentComponent: props => <ScrollView><DrawerItems {...props} /></ScrollView>
  })


export default MyDrawerNavigator
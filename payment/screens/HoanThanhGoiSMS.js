import React, { Component } from 'react'
import { Image, Platform, StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native'
import { Form, Item, Input, Label, Card, Thumbnail, CardItem, Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Col, Row, Grid } from 'react-native-easy-grid'

export default class HoanThanhGoiSMS extends Component<{}> {
    render() {
        return (
            <Container>
                <Content padder style={{ backgroundColor: '#E0E0E0' }}>
                    <Grid>
                        <Col style={{ padding: 10, backgroundColor: 'white', borderColor: '#3399FF', borderWidth: 1 }}>
                            <CardItem >
                                <Body>
                                    <Text style={{ fontWeight: 'bold' }}>Bạn đã mua thành công gói VIP 365 ngày </Text>
                                </Body>
                            </CardItem>
                            <Card style={{ borderColor: '#CC3227', borderWidth: 1 }}>
                                <CardItem>
                                    <Body >
                                        <Text style={{ fontWeight: 'bold' }}>Hạn sử dụng: <Text style={{ color: '#fc091b', fontWeight: 'bold' }}>10:30 - 31/12/2017</Text></Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <CardItem >
                                <Body >
                                    <Text style={{ fontWeight: 'bold' }}>Số xu còn lại trong ví: <Text style={{ color: '#149718', fontWeight: 'bold' }}>12345678 xu</Text></Text>
                                </Body>
                            </CardItem>
                            <Card style={{ borderColor: '#CC3227', borderWidth: 1 }}>
                                <CardItem>
                                    <Body>
                                        <Text style={{ fontWeight: 'bold' }}>Số điểm đang có: <Text style={{ color: '#149718', fontWeight: 'bold' }}>12345678 điểm</Text> </Text>
                                    </Body>
                                </CardItem>
                            </Card>

                            <Button block
                                style={{ marginTop: 10 }}
                                onPress={() => this.props.navigate('Home')}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Trở về giao diện quản lý file</Text>
                            </Button>

                            <Button block
                                style={{ marginTop: 10 }}
                                onPress={() => alert('Hoàn thành')}
                            >
                                <Text style={{ color: 'white', fontWeight: 'bold' }}>Tiếp tục thanh toán</Text>
                            </Button>

                        </Col>

                    </Grid>
                </Content>
            </Container>

        )
    }
}
import React, { Component } from 'react'
import { Platform, StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native'
import { Card, Thumbnail, CardItem, Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Col, Row, Grid } from 'react-native-easy-grid'

export default class GoiVip extends Component<{}> {
    render() {
        return (
            <Container>
                <Content padder style={{ backgroundColor: '#E0E0E0' }}>
                    <Card>
                        <CardItem>
                            <Body>
                                <Text style={{ color: '#FF8000', fontWeight: 'bold' }}>Vip Fshare giúp bạn download với tốc độ nhanh, không giới hạn </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{ marginTop: 9 }}>
                        <CardItem>
                            <MaterialIcons name='payment' size={24} style={{ marginRight: 10 }} />
                            <Body>
                                <Text style={{ marginTop: 2, fontWeight: 'bold' }}>Thanh toán bằng thẻ cào, voucher</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Grid style={{ marginTop: 9 }}>
                        <Button onPress={() => this.props.navigate('PTTT')} full transparent style={{ flex: 1, backgroundColor: 'white', height: 100, margin: 2, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Col style={{ flex: 1, backgroundColor: 'white', height: 98 }}>
                                <Row style={{ backgroundColor: '#3399FF', height: 30, marginBottom: 15 }}></Row>
                                <Text style={{ color: '#3399FF', fontWeight: 'bold', alignSelf: 'center' }}>Gói ngày</Text>
                                <Text style={{ color: '#FF8000', fontWeight: 'bold', alignSelf: 'center' }}>5.000 VNĐ</Text>
                            </Col>
                        </Button>

                        <Button onPress={() => this.props.navigate('PTTT')} full transparent style={{ flex: 1, backgroundColor: 'white', height: 100, margin: 2, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Col style={{ flex: 1, backgroundColor: 'white', height: 98 }}>
                                <Row style={{ backgroundColor: '#3399FF', height: 30, marginBottom: 15 }}></Row>
                                <Text style={{ color: '#3399FF', fontWeight: 'bold', alignSelf: 'center' }}>7 ngày</Text>
                                <Text style={{ color: '#FF8000', fontWeight: 'bold', alignSelf: 'center' }}>30.000 VNĐ</Text>
                            </Col>
                        </Button>
                    </Grid>

                    <Grid>
                        <Button onPress={() => this.props.navigate('PTTT')} full transparent style={{ flex: 1, backgroundColor: 'white', height: 100, margin: 2, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Col style={{ flex: 1, backgroundColor: 'white', height: 98 }}>
                                <Row style={{ backgroundColor: '#3399FF', height: 30, marginBottom: 15, justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>-20% giá</Text>
                                </Row>
                                <Text style={{ color: '#3399FF', fontWeight: 'bold', alignSelf: 'center' }}>30 ngày</Text>
                                <Text style={{ color: '#FF8000', fontWeight: 'bold', alignSelf: 'center' }}>48.000 VNĐ</Text>
                            </Col>
                        </Button>


                        <Button onPress={() => this.props.navigate('PTTT')} full transparent style={{ flex: 1, backgroundColor: 'white', height: 100, margin: 2, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Col style={{ flex: 1, backgroundColor: 'white', height: 98 }}>
                                <Row style={{ backgroundColor: '#3399FF', height: 30, marginBottom: 15, justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>-20% giá</Text>
                                </Row>
                                <Text style={{ color: '#3399FF', fontWeight: 'bold', alignSelf: 'center' }}>90 ngày</Text>
                                <Text style={{ color: '#FF8000', fontWeight: 'bold', alignSelf: 'center' }}>128.000 VNĐ</Text>
                            </Col>
                        </Button>
                    </Grid>

                    <Grid>
                        <Button onPress={() => this.props.navigate('PTTT')} full transparent style={{ flex: 1, backgroundColor: 'white', height: 100, margin: 2, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Col style={{ flex: 1, backgroundColor: 'white', height: 98 }}>
                                <Row style={{ backgroundColor: '#3399FF', height: 30, marginBottom: 15, justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>-30% giá</Text>
                                </Row>
                                <Text style={{ color: '#3399FF', fontWeight: 'bold', alignSelf: 'center' }}>180 ngày</Text>
                                <Text style={{ color: '#FF8000', fontWeight: 'bold', alignSelf: 'center' }}>210.000 VNĐ</Text>
                            </Col>
                        </Button>


                        <Button onPress={() => this.props.navigate('PTTT')} full transparent style={{ flex: 1, backgroundColor: 'white', height: 100, margin: 2, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Col style={{ flex: 1, backgroundColor: 'white', height: 98 }}>
                                <Row style={{ backgroundColor: '#3399FF', height: 30, marginBottom: 15, justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>-30% giá</Text>
                                </Row>
                                <Text style={{ color: '#3399FF', fontWeight: 'bold', alignSelf: 'center' }}>365 ngày</Text>
                                <Text style={{ color: '#FF8000', fontWeight: 'bold', alignSelf: 'center' }}>365.000 VNĐ</Text>
                            </Col>
                        </Button>
                    </Grid>

                    <Grid>
                        <Button onPress={() => this.props.navigate('PTTT')} full transparent style={{ flex: 1, backgroundColor: 'white', height: 100, margin: 2, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Col style={{ flex: 1, backgroundColor: 'white', height: 98 }}>
                                <Row style={{ backgroundColor: '#3399FF', height: 30, marginBottom: 15, justifyContent: 'center' }}>
                                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>-30% giá</Text>
                                </Row>
                                <Text style={{ color: '#3399FF', fontWeight: 'bold', alignSelf: 'center' }}>1 TB/tháng</Text>
                                <Text style={{ color: '#FF8000', fontWeight: 'bold', alignSelf: 'center' }}>100.000 điểm</Text>
                            </Col>
                        </Button>
                    </Grid>
                </Content>
            </Container>
        )
    }
}
import React, { Component } from 'react'
import { Platform, StyleSheet, View, StatusBar } from 'react-native'
import { Card, CardItem, Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Col, Row, Grid } from 'react-native-easy-grid'

export default class GoiSMSVip extends Component<{}> {

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
                            <MaterialIcons name='message' size={24} style={{ marginRight: 10 }} />
                            <Body>
                                <Text style={{ fontWeight: 'bold' }}>Thanh toán bằng tin nhắn SMS</Text>
                            </Body>
                        </CardItem>
                    </Card>

                    <Grid style={{ marginTop: 9 }}>
                        <Button full transparent style={{ flex: 1, backgroundColor: 'white', height: 70, margin: 2, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Col style={{ flex: 1, backgroundColor: 'white', height: 68 }}>
                                <Row style={{ backgroundColor: '#3399FF', height: 30, justifyContent: 'center', marginBottom: 10 }}>
                                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>Vip 3 ngày</Text>
                                </Row>

                                <Text style={{ color: '#FF8000', fontWeight: 'bold', alignSelf: 'center' }}>15.000 đ/sms</Text>

                            </Col>
                        </Button>
                    </Grid>

                    <Grid>
                        <Button full transparent style={{ flex: 1, backgroundColor: 'white', height: 70, margin: 2, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Col style={{ flex: 1, backgroundColor: 'white', height: 68 }}>
                                <Row style={{ backgroundColor: '#3399FF', height: 30, justifyContent: 'center', marginBottom: 10 }}>
                                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>VIP 2K</Text>
                                </Row>

                                <Text style={{ color: '#FF8000', fontWeight: 'bold', alignSelf: 'center' }}>2.000/ngày/10 lượt tải nhanh</Text>

                            </Col>
                        </Button>
                    </Grid>

                    <Grid>
                        <Button full transparent style={{ flex: 1, backgroundColor: 'white', height: 70, margin: 2, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Col style={{ flex: 1, backgroundColor: 'white', height: 68 }}>
                                <Row style={{ backgroundColor: '#3399FF', height: 30, justifyContent: 'center', marginBottom: 10 }}>
                                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>FCODE5</Text>
                                </Row>

                                <Text style={{ color: '#FF8000', fontWeight: 'bold', alignSelf: 'center' }}>5.000/3 lượt tải nhanh/12 giờ</Text>

                            </Col>
                        </Button>
                    </Grid>

                    <Grid>
                        <Button full transparent style={{ flex: 1, backgroundColor: 'white', height: 70, margin: 2, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Col style={{ flex: 1, backgroundColor: 'white', height: 68 }}>
                                <Row style={{ backgroundColor: '#3399FF', height: 30, justifyContent: 'center', marginBottom: 10 }}>
                                    <Text style={{ color: 'white', alignSelf: 'center', fontWeight: 'bold' }}>FSUB10</Text>
                                </Row>

                                <Text style={{ color: '#FF8000', fontWeight: 'bold', alignSelf: 'center' }}>10.000 đ/12 giờ</Text>

                            </Col>
                        </Button>
                    </Grid>

                </Content>
            </Container>


        )
    }
}

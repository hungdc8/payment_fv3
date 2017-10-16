import React, { Component } from 'react'
import { Image, Platform, StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native'
import { Form, Item, Input, Label, Card, Thumbnail, CardItem, Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Col, Row, Grid } from 'react-native-easy-grid'

export default class ThanhToanGoiSMS extends Component<{}> {
    render() {
        return (
            <Container>
                <Content padder style={{ backgroundColor: '#E0E0E0' }}>
                    <Grid>
                        <Col style={{ padding: 10, backgroundColor: 'white', borderColor: '#3399FF', borderWidth: 1 }}>
                            <Card>
                                <CardItem >
                                    <Body >
                                        <Text style={{ color: 'black', fontWeight: 'bold' }}>Bạn đang mua gói VIP 365 ngày bằng thẻ Mobifone</Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Card>
                                <CardItem >
                                    <Body >
                                        <Text style={{ color: 'black' }}>Xu của bạn trong ví: <Text style={{ color: '#149718', fontWeight: 'bold' }}>123456789 xu</Text></Text>
                                        <Text style={{ color: 'black' }}>Bạn cần nạp thêm: <Text style={{ color: '#149718', fontWeight: 'bold' }}>123456789 xu</Text></Text>
                                    </Body>
                                </CardItem>
                            </Card>
                            <Form>
                                <Item floatingLabel>
                                    <Label style={{fontWeight:'bold'}}>Nhập mã thẻ</Label>
                                    <Input />
                                </Item>
                                <Item floatingLabel last>
                                    <Label style={{fontWeight:'bold'}}>Nhập số seria</Label>
                                    <Input />
                                </Item>
                                <Grid>
                                    <Col style={{ flex: 3 }}>
                                        <Image
                                            source={require('../img/capcha.png')}
                                            style={{
                                                marginTop: 10,
                                                width: 200,
                                                height: 50,
                                                alignSelf: "stretch",
                                                justifyContent: "center",
                                                alignItems: "center",

                                            }}
                                        >
                                        </Image>
                                    </Col>
                                    <Col style={{ flex: 1 }}>
                                        <Button transparent style={{ marginTop: 10, borderColor: '#FF8000', borderWidth: 2 }}>
                                            <Icon name='refresh' style={{ fontSize: 50, color: 'black' }} />
                                        </Button>

                                    </Col>
                                </Grid>
                                <Item floatingLabel last>
                                    <Label style={{fontWeight:'bold'}}>Nhập dãy số trên</Label>
                                    <Input />
                                </Item>
                            </Form>
                            <Grid>
                                <Col>
                                    <Button
                                        style={{ marginTop: 10, alignSelf: 'center', justifyContent: 'center' }}
                                        onPress={() => this.props.navigate('HoanThanh')}
                                    >
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Thanh toán</Text>
                                    </Button>
                                </Col>
                                <Col>
                                    <Button
                                        style={{ marginTop: 10, justifyContent: 'center', alignSelf: 'center' }}
                                    >
                                        <Text style={{ color: 'white', fontWeight: 'bold' }}>Nhập lại</Text>
                                    </Button>
                                </Col>
                            </Grid>

                        </Col>

                    </Grid>
                </Content>
            </Container>

        )
    }
}
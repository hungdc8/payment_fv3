import React, { Component } from 'react'
import { Image, Platform, StyleSheet, View, StatusBar, TouchableOpacity } from 'react-native'
import { Card, Thumbnail, CardItem, Drawer, Container, Header, Title, Content, Footer, FooterTab, Button, Left, Right, Body, Icon, Text } from 'native-base'
import { Ionicons } from '@expo/vector-icons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { Col, Row, Grid } from 'react-native-easy-grid'

export default class LoaiTheCaoSMS extends Component<{}> {
    render() {
        return (
            <Container>
                <Content padder style={{ backgroundColor: '#E0E0E0' }}>
                    <Grid>
                        <Col style={{ backgroundColor: 'white', height: 100, margin: 4, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Button full transparent style={{ flex: 1, flexDirection: 'column', padding: 20 }}
                                onPress={() => this.props.navigate('ThanhToan')}
                            >
                                <Image
                                    source={{
                                        uri: "https://static2.fshare.vn/img/partners/cards/mobifone.png?v=f9ad261f"
                                    }}
                                    style={{
                                        height: 30,
                                        alignSelf: "stretch",
                                        justifyContent: "center",
                                        alignItems: "center",

                                    }}>
                                </Image>
                            </Button>
                        </Col>
                        <Col style={{ backgroundColor: 'white', height: 100, margin: 4, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Button full transparent style={{ flex: 1, flexDirection: 'column', padding: 20 }}
                                onPress={() => this.props.navigate('ThanhToan')}
                            >
                                <Image
                                    source={{
                                        uri: "https://static2.fshare.vn/img/partners/cards/viettel.png?v=f9ad261f"
                                    }}
                                    style={{
                                        height: 50,
                                        alignSelf: "stretch",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                </Image>
                            </Button>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col style={{ backgroundColor: 'white', height: 100, margin: 4, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Button full transparent style={{ flex: 1, flexDirection: 'column', padding: 20 }}
                                onPress={() => this.props.navigate('ThanhToan')}
                            >
                                <Image
                                    source={{
                                        uri: "https://pay.vtc.vn/media2/upload/images/news/cms_paygate/image/201311/1364613029vinafone_b_30112013050558.jpg"
                                    }}
                                    style={{
                                        height: 30,
                                        alignSelf: "stretch",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                </Image>
                            </Button>
                        </Col>
                        <Col style={{ backgroundColor: 'white', height: 100, margin: 4, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Button full transparent style={{ flex: 1, flexDirection: 'column' }}
                                onPress={() => this.props.navigate('ThanhToan')}
                            >
                                <Image
                                    source={{
                                        uri: "https://static1.fshare.vn/img/partners/cards/zing.png?v=f9ad261f"
                                    }}
                                    style={{
                                        height: 60,
                                        alignSelf: "stretch",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                </Image>
                            </Button>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col style={{ backgroundColor: 'white', height: 100, margin: 4, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Button full transparent style={{ flex: 1, flexDirection: 'column' }}
                                onPress={() => this.props.navigate('ThanhToan')}
                            >
                                <Image
                                    source={{
                                        uri: "https://static2.fshare.vn/img/partners/cards/vcoin.png?v=f9ad261f"
                                    }}
                                    style={{
                                        height: 60,
                                        alignSelf: "stretch",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                </Image>
                            </Button>
                        </Col>
                        <Col style={{ backgroundColor: 'white', height: 100, margin: 4, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Button full transparent style={{ flex: 1, flexDirection: 'column' }}
                                onPress={() => this.props.navigate('ThanhToan')}
                            >
                                <Image
                                    source={{
                                        uri: "https://static1.fshare.vn/img/partners/cards/gate.png?v=f9ad261f"
                                    }}
                                    style={{
                                        height: 50,
                                        alignSelf: "stretch",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                </Image>
                            </Button>
                        </Col>
                    </Grid>
                    <Grid>
                        <Col style={{ backgroundColor: 'white', height: 100, margin: 4, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Button full transparent style={{ flex: 1, flexDirection: 'column' }}
                                onPress={() => this.props.navigate('ThanhToan')}
                            >
                                <Image
                                    source={{
                                        uri: "https://static1.fshare.vn/img/partners/cards/voucher.png?v=f9ad261f"
                                    }}
                                    style={{
                                        height: 50,
                                        alignSelf: "stretch",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                </Image>
                            </Button>
                        </Col>
                        <Col style={{ backgroundColor: 'white', height: 100, margin: 4, borderColor: '#3399FF', borderWidth: 1 }}>
                            <Button full transparent style={{ flex: 1, flexDirection: 'column', padding: 5 }}
                                onPress={() => this.props.navigate('ThanhToan')}
                            >
                                <Image
                                    source={{
                                        uri: "https://storage.fshare.vn/images/093620012017_700x400.png"
                                    }}
                                    style={{
                                        height: 90,
                                        alignSelf: "stretch",
                                        justifyContent: "center",
                                        alignItems: "center"
                                    }}>
                                </Image>
                            </Button>
                        </Col>
                    </Grid>



                </Content>
            </Container>

        )
    }
}
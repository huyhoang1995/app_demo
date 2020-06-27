import React, { Component } from 'react'
import PropTypes from 'prop-types'
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    FlatList,
    Image,
    TextInput,
    Button,
} from 'react-native';

export default function ChatScreen() {

    return (
        <View style={styles.container}>
            <View style={styles.content} >
                <View style={styles.chatList}>
                    <ScrollView>
                        <View style={styles.chatBoxUser}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Xin chào bạn</Text>
                                <Text >Tin nhắn</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <View style={styles.chatBoxMe}>
                                <View style={{ marginRight: 20 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Xin chào bạn</Text>
                                    <Text >Tin nhắn</Text>
                                </View>
                                <View>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.chatBoxUser}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Xin chào bạn</Text>
                                <Text >Tin nhắn</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <View style={styles.chatBoxMe}>
                                <View style={{ marginRight: 20 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Xin chào bạn</Text>
                                    <Text >Tin nhắn</Text>
                                </View>
                                <View>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.chatBoxUser}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Xin chào bạn</Text>
                                <Text >Tin nhắn</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <View style={styles.chatBoxMe}>
                                <View style={{ marginRight: 20 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Xin chào bạn</Text>
                                    <Text >Tin nhắn</Text>
                                </View>
                                <View>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                                        }}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={styles.chatBoxUser}>
                            <Image
                                style={styles.tinyLogo}
                                source={{
                                    uri: 'https://reactnative.dev/img/tiny_logo.png',
                                }}
                            />
                            <View style={{ marginLeft: 20 }}>
                                <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Xin chào bạn</Text>
                                <Text >Tin nhắn</Text>
                            </View>
                        </View>
                        <View style={{ alignItems: 'flex-end' }}>
                            <View style={styles.chatBoxMe}>
                                <View style={{ marginRight: 20 }}>
                                    <Text style={{ fontSize: 20, fontWeight: 'bold' }} >Xin chào bạn</Text>
                                    <Text >Tin nhắn</Text>
                                </View>
                                <View>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                                        }}
                                    />
                                </View>
                            </View>
                        </View>

                    </ScrollView>
                </View>
                <View>
                    <TextInput
                        placeholder="Tin nhắn"
                        style={styles.inputText}
                    />

                </View>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 20,
    },
    content: {
        flex: 1,
        paddingHorizontal: 24,
        flexDirection: 'column'
    },
    chatList: {
        flex: 80,
    },
    chatBoxUser: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: '#eff0f1',
        width: '80%',
        marginTop: 20,
        padding: 10,
        borderRadius: 10
    },
    chatBoxMe: {
        flexDirection: 'row',
        marginBottom: 10,
        backgroundColor: 'skyblue',
        marginTop: 20,
        padding: 10,
        borderRadius: 10,


    },
    sendMessageBox: {
        flex: 20,
    },
    tinyLogo: {
        width: 50,
        height: 50,
    },
    inputText: {
        marginTop: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    logo: {
        width: 66,
        height: 58,
    },
});
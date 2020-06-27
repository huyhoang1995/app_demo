import React, { useState } from 'react'
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
    TouchableOpacity
} from 'react-native';

export default function ListConversationScreen({ navigation }) {
    const [user, setUser] = useState([
        { name: 'Devin', id: 1 },
        { name: 'Dan', id: 2 },
        { name: 'Dominic', id: 3 },
        { name: 'Jackson', id: 4 },
        { name: 'James', id: 5 },
        { name: 'Joel', id: 6 },
        { name: 'John', id: 7 },
        { name: 'Jillian', id: 8 },
        { name: 'Jimmy', id: 9 },
        { name: 'Julie', id: 10 },
        { name: 'hippo', id: 11 },
        { name: 'ami', id: 12 },
        { name: 'kirito', id: 13 },
        { name: 'asuna', id: 14 },
        { name: 'mario', id: 15 },
        { name: 'peach', id: 16 },
    ])
    const pressHandler = () => {
        navigation.navigate('ChatScreen')
    }
    return (
        <View style={styles.container}>

            <View style={styles.content}>
                <TextInput
                    placeholder="Tìm kiếm"

                    style={styles.inputText}

                />
                <View style={styles.listUser}>

                    <FlatList

                        data={user}
                        renderItem={({ item }) =>
                            <TouchableOpacity onPress={pressHandler}>

                                <View style={styles.chatBox}>
                                    <Image
                                        style={styles.tinyLogo}
                                        source={{
                                            uri: 'https://reactnative.dev/img/tiny_logo.png',
                                        }}
                                    />
                                    <View style={{ marginLeft: 20, }}>
                                        <Text style={{ fontSize: 20, fontWeight: 'bold' }} >{item.name}</Text>
                                        <View style={{ flex: 1, flexDirection: 'row' }}>
                                            <Text >Tin nhắn</Text>
                                        </View>

                                    </View>
                                </View>
                            </TouchableOpacity>

                        }
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
        paddingHorizontal: 20,
    },
    listUser: {
        flex: 1,
        marginTop: 20,
    },
    inputText: {
        marginTop: 10,
        borderColor: '#bbb',
        borderWidth: 1,
        borderStyle: 'dashed',
        borderRadius: 10,
    },
    chatBox: {
        flexDirection: 'row',
        marginBottom: 10,
        flex: 1,
        backgroundColor: '#eff0f1',
        padding: 10,
        borderRadius: 10
    }
    , tinyLogo: {
        width: 50,
        height: 50,
    },
    logo: {
        width: 66,
        height: 58,
    },
});
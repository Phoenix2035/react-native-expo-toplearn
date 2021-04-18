import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
import Icon from '../components/shared/Icon'
import ItemSeparator from '../components/shared/ItemSeparator'
import Screen from '../components/shared/Screen'


export default function AccountScreen() {
    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require("../assets/person.jpg")}
                />
                <View style={styles.details}>
                    <Text style={styles.title}>علی قدوسی</Text>
                    <Text style={styles.subTitle}>aligodosi@gmail.com</Text>
                </View>
                <TouchableOpacity
                    onPress={() => { }}
                    style={{ alignSelf: "center", marginLeft: 20 }}
                >

                    <Icon name="settings" backgroundColor="tomato" />
                </TouchableOpacity>
            </View>

            <ItemSeparator height={10} />

            <TouchableHighlight underlayColor="#f8f4f4" onPress={() => { }}>
                <View style={styles.container}>
                    <Icon name="logout" backgroundColor="tomato" />
                    <View style={styles.details}>
                        <Text style={styles.title}>خروج از حساب کاربری</Text>
                    </View>
                </View>
            </TouchableHighlight>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 15
    },
    screen: {
        backgroundColor: "#f8f4f4"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 40,
    },
    details: {
        marginLeft: 10,
        justifyContent: "center"
    },
    title: {
        fontFamily: "ih",
        fontSize: 20
    },
    subTitle: {
        color: "#6e6969"
    }
})
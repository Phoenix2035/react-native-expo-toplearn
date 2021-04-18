import React from 'react'
import { Text, View, StyleSheet, Image, TouchableOpacity, TouchableHighlight } from 'react-native'
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
            </View>
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
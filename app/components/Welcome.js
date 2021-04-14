import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function Welcome() {
    return (
        <View>
            <Text style={styles.welcome}>سلام خوش آمدید به مجموعه تاپ لرن</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 25,
        textAlign: "center",
        fontFamily:"yekan"
    }
})

import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default function CustomButton({ title, onPress }) {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: "royalblue",
        padding: 15,
        marginVertical: 8,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
        fontFamily: "ih",
        fontSize: 18
    }
})

import React from 'react'
import { StyleSheet, TouchableOpacity } from 'react-native'
import CustomText from './CustomText'


export default function CustomButton({ title, onPress, color = "tomato" }) {
    return (
        <TouchableOpacity style={[styles.button, { backgroundColor: color }]} onPress={onPress}>
            <CustomText
                size="2.3"
                fontFamily="ih"
                styles={styles.text}
            >
                {title}
            </CustomText>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        width: "100%",
        backgroundColor: "tomato",
        padding: 15,
        marginVertical: 8,
        borderRadius: 15,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        color: "white",
    }
})

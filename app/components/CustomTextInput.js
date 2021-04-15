import React from "react"
import { StyleSheet, Text, View, TextInput } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"

export default function CustomTextInput({ icon, ...otherProps }) {
    return (
        <View style={styles.container}>
            <TextInput style={styles.text} {...otherProps} />
            {
                icon &&
                (
                    <MaterialCommunityIcons
                        style={styles.icon}
                        name={icon}
                        size={30}
                        color="#6e6969"
                    />
                )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "90%",
        flexDirection: "row",
        borderRadius: 20,
        backgroundColor: "lightgray",
        marginVertical: 10,
        padding: 15
    },
    icon: {
        alignSelf: "center",
        
    },
    text: {
        width: "90%",
        color: "#0c0c0c",
        textAlign: "center",
        fontFamily: "yekan",
        fontSize: 18,
    }
})

import React from "react"
import {StyleSheet, View} from "react-native"
import Constants from "expo-constants"

export default function Screen({style, children}) {
    return (
        <View style={[styles.screen, style]}>
            {children}
        </View>
    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        marginTop: Constants.statusBarHeight
    }
})

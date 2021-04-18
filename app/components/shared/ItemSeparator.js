import React from 'react'
import { StyleSheet, View } from 'react-native'

export default function ItemSeparator({ height = 1 }) {
    return <View style={[styles.separator,{height}]} />
}

const styles = StyleSheet.create({
    separator: {
        width: "100%",
        backgroundColor: "gray",
    }
})

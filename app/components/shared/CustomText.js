import React from 'react'
import { Text } from 'react-native'
import { RFPercentage } from "react-native-responsive-fontsize"

export default function CustomText({ size, fontFamily, styles, children, color = "#000" }) {
    return (
        <Text style={[{ color, fontFamily, fontSize: RFPercentage(size) }, styles]}>
            { children}
        </Text >
    )
}



import React from 'react'
import { StyleSheet, Text, View, Image, ImageBackground, Button } from 'react-native'

import CustomButton from '../components/CustomButton'

export default function Welcome() {
    return (
        <ImageBackground
            style={styles.background}
            blurRadius={2}
            source={require("../assets/bg1.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />
                <Text style={styles.firstText}>خودآموزی، کسب تجربه و ورود به بازار کار</Text>
            </View>
            <View style={styles.buttonContainer}>
                <CustomButton title="ورود" onPress={() => { }} />
                <CustomButton title="ثبت نام" onPress={() => { }} />
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        justifyContent: "flex-end",
        alignItems: "center"
    },
    buttonContainer: {
        width: "100%",
        padding: 20
    },
    logoContainer: {
        position: "absolute",
        top: 70,
        alignItems: "center"
    },
    logo: {
        width: 260,
        height: 190
    },
    firstText: {
        fontFamily: "ih",
        fontSize: 25,
        top: 25,
        color: "white"
    }
})

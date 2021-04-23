import React, { useEffect } from 'react'
import NetInfo from "@react-native-community/netinfo"
import { Alert, BackHandler, StyleSheet, View, Image, ImageBackground, Button } from 'react-native'

import CustomButton from '../components/shared/CustomButton'
import CustomText from "../components/shared/CustomText"

const exitAppAlert = () => {
    return Alert.alert(
        "ارتباط با سرور",
        "برای استفاده از اپلیکیشن باید به اینترنت متصل باشید",
        [
            {
                text: "باشه",
                onPress: BackHandler.exitApp
            }
        ],
        { cancelable: false }
    )
}

export default function Welcome({ navigation }) {

    useEffect(() => {
        const checkForNet = async () => {
            const state = await NetInfo.fetch()
            if (!state.isConnected) {
                exitAppAlert()
            }
        }

        checkForNet()
    }, [])

    return (
        <ImageBackground
            style={styles.background}
            blurRadius={2}
            source={require("../assets/bg1.jpg")}
        >
            <View style={styles.logoContainer}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />

                <CustomText
                    size="2.5"
                    fontFamily="ih"
                    styles={styles.firstText}>
                    خودآموزی، کسب تجربه و ورود به بازار کار
                </CustomText>
            </View>

            <View style={styles.buttonContainer}>
                <CustomButton
                    title="ورود"
                    color="royalblue"
                    onPress={() => navigation.navigate("Login")}
                />
                <CustomButton
                    title="ثبت نام"
                    onPress={() => navigation.navigate("Register")}
                />
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
        top: 25,
        color: "white"
    }
})

import React, {useEffect} from 'react'
import NetInfo from "@react-native-community/netinfo"
import {Alert, BackHandler, StyleSheet, View, Image, ImageBackground} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {decodeToken} from "../utils/jwt";
import {StackActions, useNavigationState} from "@react-navigation/native"


import CustomButton from '../components/shared/CustomButton'
import CustomText from "../components/shared/CustomText"
import {showToast} from "../utils/toast";

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
        {cancelable: false}
    )
}

export default function Welcome({navigation}) {
    const screenIndex = useNavigationState((state) => state.index);
    useEffect(() => {
        let currentCount = 0;

        if (screenIndex <= 0) {
            BackHandler.addEventListener("hardwareBackPress", () => {
                if (currentCount === 1) {
                    BackHandler.exitApp();
                    return true;
                }

                currentCount += 1;
                showToast("برای خروج دوباره دکمه برگشت را لمس بنمایید");

                setTimeout(() => {
                    currentCount = 0;
                }, 1000);

                return true;
            });
        }
    }, []);

    useEffect(() => {
        const checkForNet = async () => {
            const state = await NetInfo.fetch()
            if (!state.isConnected) {
                exitAppAlert()
            } else {
                const token = await AsyncStorage.getItem("token")
                const userId = JSON.parse(await AsyncStorage.getItem("userId"))

                if (token !== null && userId !== null) {
                    const decodedToken = decodeToken(token)
                    if (decodedToken.user.userId === userId) {
                        // navigation.navigate("Home")
                        navigation.dispatch(
                            StackActions.replace("Home")
                        )
                    } else {
                        await AsyncStorage.removeItem("token")
                        await AsyncStorage.removeItem("userId")
                        navigation.navigate("Login")
                    }
                }
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
                <Image style={styles.logo} source={require("../assets/logo.png")}/>

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

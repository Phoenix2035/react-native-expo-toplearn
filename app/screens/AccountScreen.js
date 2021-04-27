import React from 'react'
import {View, StyleSheet, Image, TouchableOpacity, TouchableHighlight} from 'react-native'
import AsyncStorage from "@react-native-async-storage/async-storage";
import {StackActions} from "@react-navigation/native"

import CustomText from '../components/shared/CustomText'
import Icon from '../components/shared/Icon'
import ItemSeparator from '../components/shared/ItemSeparator'
import Screen from '../components/shared/Screen'


export default function AccountScreen({navigation}) {

    const handleLogout = async () => {
        await AsyncStorage.removeItem("token")
        await AsyncStorage.removeItem("userId")
        navigation.dispatch(StackActions.replace("Welcome"))
    }

    return (
        <Screen style={styles.screen}>
            <View style={styles.container}>
                <Image
                    style={styles.image}
                    source={require("../assets/person.jpg")}
                />
                <View style={styles.details}>
                    <CustomText size="2.5" fontFamily="ih" styles={styles.title}>علی قدوسی</CustomText>
                    <CustomText size="2.2" fontFamily="ih" styles={styles.subTitle}>aligodosi@gmail.com</CustomText>
                </View>
                <TouchableOpacity
                    onPress={() => {
                    }}
                    style={{alignSelf: "center", marginLeft: 20}}
                >

                    <Icon name="settings" backgroundColor="tomato"/>
                </TouchableOpacity>
            </View>

            <ItemSeparator height={10}/>

            <TouchableHighlight underlayColor="#f8f4f4" onPress={handleLogout}>
                <View style={styles.container}>
                    <Icon name="logout" backgroundColor="tomato"/>
                    <View style={styles.details}>
                        <CustomText size="2.5" fontFamily="ih" styles={styles.title}>خروج از حساب کاربری</CustomText>
                    </View>
                </View>
            </TouchableHighlight>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        marginVertical: 20,
        padding: 15
    },
    screen: {
        backgroundColor: "#f8f4f4"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 40,
    },
    details: {
        marginLeft: 10,
        justifyContent: "center"
    },
    subTitle: {
        color: "#6e6969"
    }
})
import React from "react"
import { StyleSheet, Text, View, TextInput, Image, } from "react-native"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Constants from "expo-constants"
import { Formik } from "formik"
import CustomButton from "../components/CustomButton"


export default function LoginScreen() {

    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require("../assets/logo.png")} />

            <Formik
                initialValues={{ email: "", password: "" }}
                onSubmit={values => console.log(values)}
            >
                {({ handleChange, handleSubmit }) => (
                    <>
                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="ایمیل کاربری"
                                autoCompleteType="email"
                                autoCorrect={false}
                                keyboardType="email-address"
                                placeholderTextColor="royalblue"
                                onChangeText={handleChange("email")}
                            />
                            <MaterialCommunityIcons
                                style={styles.icon}
                                name="email"
                                size={35}
                                color="dodgerblue"
                            />
                        </View>

                        <View style={styles.inputContainer}>
                            <TextInput
                                style={styles.textInput}
                                placeholder="رمز عبور"
                                autoCompleteType="password"
                                autoCorrect={false}
                                placeholderTextColor="royalblue"
                                secureTextEntry
                                onChangeText={handleChange("password")}
                            />
                            <MaterialCommunityIcons
                                style={styles.icon}
                                name="onepassword"
                                size={35}
                                color="dodgerblue"
                            />
                        </View>

                        <View style={{ width: "60%" }}>
                            <CustomButton
                                title="ورود کاربر"
                                onPress={handleSubmit}
                            />
                        </View>
                    </>
                )}
            </Formik>
        </View >
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: Constants.statusBarHeight
    },
    logo: {
        width: 270,
        height: 200,
        marginTop: 20,
        marginBottom: 40
    },
    inputContainer: {
        flexDirection: "row",
        alignItems: "center",
        position: "relative"
    },
    textInput: {
        width: "90%",
        height: 50,
        backgroundColor: "lightgray",
        borderRadius: 15,
        textAlign: "center",
        fontFamily: "yekan",
        fontSize: 18,
        marginBottom: 15
    },
    icon: {
        position: "absolute",
        right: 10,
        top: 8,
        marginBottom: 15,
    }

})

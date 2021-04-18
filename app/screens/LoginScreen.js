import React from "react"
import { StyleSheet, Text, View, Image, Keyboard, TouchableWithoutFeedback } from "react-native"
import { Formik } from "formik"
import * as Yup from "yup"

import { CustomFormField, CustomFormik, SubmitButton } from "../components/forms"
import Screen from "../components/shared/Screen"

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("این فیلد الزامی می باشد")
        .email("ایمیل معتبر نمی باشد"),
    password: Yup.string()
        .required("این فیلد الزامی می باشد")
        .min(6, "کلمه عبور نباید کمتر از 6 کاراکتر باشد")
        .max(12, "کلمه عبور نباید بیشتر از 12 کاراکتر باشد"),
})


export default function LoginScreen({ navigation }) {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Screen style={styles.container}>
                <Image style={styles.logo} source={require("../assets/logo.png")} />

                <CustomFormik
                    initialValues={{ email: "", password: "" }}
                    onSubmit={() => navigation.navigate("TabNavigator")}
                // validationSchema={validationSchema}
                >
                    <CustomFormField
                        placeholder="ایمیل"
                        autoCompleteType="email"
                        autoCorrect={false}
                        keyboardType="email-address"
                        placeholderTextColor="royalblue"
                        icon="email"
                        name="email"
                    />

                    <CustomFormField
                        placeholder="رمز عبور"
                        autoCompleteType="password"
                        autoCorrect={false}
                        placeholderTextColor="royalblue"
                        secureTextEntry
                        icon="onepassword"
                        name="password"
                    />


                    <View style={{ width: "60%" }}>
                        <SubmitButton
                            title="ورود کاربر"
                        />
                    </View>

                </CustomFormik>
            </Screen >
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center"
    },
    logo: {
        width: 270,
        height: 200,
        marginTop: 20,
        marginBottom: 40
    },
})

import React, { useState } from "react"
import { StyleSheet, Text, View, Image, Keyboard, TouchableWithoutFeedback, ActivityIndicator } from "react-native"
import { Formik } from "formik"
import * as Yup from "yup"

import { CustomFormField, CustomFormik, SubmitButton } from "../components/forms"
import Screen from "../components/shared/Screen"
import { registerUser } from "../api/users"



const validationSchema = Yup.object().shape({
    fullname: Yup.string()
        .required("نام و نام خانوادگی الزامی می باشد")
        .min(5, "حداقل باید 5 کاراکتر وارد کنید"),
    email: Yup.string()
        .required("این فیلد الزامی می باشد")
        .email("ایمیل معتبر نمی باشد"),
    password: Yup.string()
        .required("این فیلد الزامی می باشد")
        .min(6, "کلمه عبور نباید کمتر از 6 کاراکتر باشد")
        .max(12, "کلمه عبور نباید بیشتر از 12 کاراکتر باشد"),
    passwordConfirm: Yup.string()
        .required("تکرار رمز عبور الزامی می باشد")
        .oneOf([Yup.ref("password"), null], "رمز عبور باید یکسان باشد"),
})


export default function RegisterScreen({ navigation }) {
    const [loading, setLoading] = useState(false)

    const handleUserRegister = async (user) => {
        try {
            const status = await registerUser(user)

            if (status === 201) {
                navigation.navigate("Login")
                setLoading(false)
            } else {
                console.log("Server Error")
                setLoading(false)
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Screen style={styles.container}>
                {/* <Image style={styles.logo} source={require("../assets/logo.png")} /> */}

                <CustomFormik
                    initialValues={{
                        fullname: "",
                        email: "",
                        password: "",
                        passwordConfirm: ""
                    }}
                    onSubmit={user => {
                        setLoading(true)
                        handleUserRegister(user)
                    }}
                    validationSchema={validationSchema}
                >
                    <CustomFormField
                        placeholder="نام و نام خانوادگی"
                        autoCorrect={false}
                        placeholderTextColor="royalblue"
                        icon="account-circle"
                        name="fullname"
                    />


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
                        autoCorrect={false}
                        placeholderTextColor="royalblue"
                        secureTextEntry
                        icon="onepassword"
                        name="password"
                    />


                    <CustomFormField
                        placeholder="تکرار رمز عبور"
                        autoCorrect={false}
                        placeholderTextColor="royalblue"
                        secureTextEntry
                        icon="onepassword"
                        name="passwordConfirm"
                    />


                    <View style={{ width: "60%" }}>
                        <SubmitButton
                            title="ثبت نام "
                        />
                    </View>
                </CustomFormik>

                {
                    loading ?
                        <ActivityIndicator style={styles.loadingContainer} size="large" color="tomato" animating={loading} />
                        :
                        null
                }

            </Screen >
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        marginTop: 120
    },
    loadingContainer: {
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    },
    // logo: {
    //     width: 270,
    //     height: 200,
    //     marginTop: 20,
    //     marginBottom: 40
    // },
})

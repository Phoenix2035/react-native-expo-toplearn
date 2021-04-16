import React from "react"
import { StyleSheet, Text, View, Image, Keyboard, TouchableWithoutFeedback } from "react-native"
import Constants from "expo-constants"
import { Formik } from "formik"
import * as Yup from "yup"


import CustomButton from "../components/CustomButton"
import CustomTextInput from "../components/CustomTextInput"
import ErrorMessage from "../components/ErrorMessage"


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


export default function RegisterScreen() {

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <View style={styles.container}>
                {/* <Image style={styles.logo} source={require("../assets/logo.png")} /> */}

                <Formik
                    initialValues={{ fullname: "", email: "", password: "", passwordConfirm: "" }}
                    onSubmit={values => console.log(values)}
                    validationSchema={validationSchema}
                >
                    {({ handleChange, handleSubmit, errors, setFieldTouched, touched }) => (
                        <>

                            <CustomTextInput
                                placeholder="نام و نام خانوادگی"
                                autoCorrect={false}
                                placeholderTextColor="royalblue"
                                icon="account-circle"
                                onChangeText={handleChange("fullname")}
                                onBlur={() => setFieldTouched("fullname")}
                            />
                            <ErrorMessage
                                error={errors.fullname}
                                visible={touched.fullname}
                            />

                            <CustomTextInput
                                placeholder="ایمیل"
                                autoCompleteType="email"
                                autoCorrect={false}
                                keyboardType="email-address"
                                placeholderTextColor="royalblue"
                                icon="email"
                                onChangeText={handleChange("email")}
                                onBlur={() => setFieldTouched("email")}
                            />
                            <ErrorMessage
                                error={errors.email}
                                visible={touched.email}
                            />


                            <CustomTextInput
                                placeholder="رمز عبور"
                                autoCorrect={false}
                                placeholderTextColor="royalblue"
                                secureTextEntry
                                icon="onepassword"
                                onChangeText={handleChange("password")}
                                onBlur={() => setFieldTouched("password")}
                            />
                            <ErrorMessage
                                error={errors.password}
                                visible={touched.password}
                            />

                            <CustomTextInput
                                placeholder="تکرار رمز عبور"
                                autoCorrect={false}
                                placeholderTextColor="royalblue"
                                secureTextEntry
                                icon="onepassword"
                                onChangeText={handleChange("passwordConfirm")}
                                onBlur={() => setFieldTouched("passwordConfirm")}
                            />
                            <ErrorMessage
                                error={errors.passwordConfirm}
                                visible={touched.passwordConfirm}
                            />

                            <View style={{ width: "60%" }}>
                                <CustomButton
                                    title="ثبت نام "
                                    onPress={handleSubmit}
                                />
                            </View>
                        </>
                    )}
                </Formik>
            </View >
        </TouchableWithoutFeedback>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        marginTop: Constants.statusBarHeight + 120
    },
    // logo: {
    //     width: 270,
    //     height: 200,
    //     marginTop: 20,
    //     marginBottom: 40
    // },
})

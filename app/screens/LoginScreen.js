import React, {useEffect} from "react"
import {StyleSheet, View, Image, Keyboard, TouchableWithoutFeedback} from "react-native"
import * as Yup from "yup"
import Toast from "react-native-tiny-toast";
import {successToast, loadingToast, showToast} from "../utils/toast"


import {CustomFormField, CustomFormik, SubmitButton} from "../components/forms"
import Screen from "../components/shared/Screen"
import {loginUser} from "../api/users"

const validationSchema = Yup.object().shape({
    email: Yup.string()
        .required("این فیلد الزامی می باشد")
        .email("ایمیل معتبر نمی باشد"),
    password: Yup.string()
        .required("این فیلد الزامی می باشد")
        .min(5, "کلمه عبور نباید کمتر از 5 کاراکتر باشد")
        .max(12, "کلمه عبور نباید بیشتر از 12 کاراکتر باشد"),
})


export default function LoginScreen({navigation, route}) {

    useEffect(() => {
        if (route.params.successRegister) {
            successToast("ثبت نام موفقیت آمیز بود")
        }
    }, [route])

    const handleUserLogin = async (user) => {
        try {
            loadingToast("در حال برقراری ارتباط ...");
            const status = await loginUser(user);
            if (status === 200) {
                Toast.hide();
                successToast("ورود موفقیت آمیز بود");
                navigation.navigate("Home")
            } else {
                Toast.hide();
                showToast("ایمیل کاربری یا کلمه عبور صحیح نمی باشد");
            }
        } catch (err) {
            Toast.hide();
            console.log(err);
        }
    };

    return (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
            <Screen style={styles.container}>
                <Image style={styles.logo} source={require("../assets/logo.png")}/>

                <CustomFormik
                    initialValues={{email: "", password: ""}}
                    // onSubmit={() => navigation.navigate("TabNavigator")}
                    onSubmit={user => {
                        handleUserLogin(user)
                    }}
                    validationSchema={validationSchema}
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


                    <View style={{width: "60%"}}>
                        <SubmitButton
                            title="ورود کاربر"
                        />
                    </View>

                </CustomFormik>
            </Screen>
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

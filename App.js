import React, { useState, useEffect } from "react";
import { I18nManager } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from 'expo-app-loading';
import { Provider } from "react-redux"
import { store } from "./app/redux/store"
import AnimatedSplash from "react-native-animated-splash-screen"

import getFonts from "./app/utils/fonts";
import StackNavigator from "./app/containers/StackNavigator";

//* Support for RTL
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App = () => {
    const [fontLoading, setFontLoading] = useState(false)
    const [splashLoading, setSplashLoading] = useState(false)


    useEffect(() => {
        setTimeout(() => {
            setSplashLoading(true)
        }, 2000);
    }, [])

    if (!fontLoading) {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontLoading(true)}
                onError={err => console.error(err)}
            />
        );
    }

    return (
        <AnimatedSplash
            translucent={true}
            isLoaded={splashLoading}
            logoImage={require("./app/assets/logo.png")}
            backgroundColor={"#262626"}
            logoWidth={250}
            logoHeight={250}
        >

            <NavigationContainer>
                <Provider store={store}>
                    <StackNavigator />
                </Provider>
            </NavigationContainer>

        </AnimatedSplash>
    );
}

export default App;


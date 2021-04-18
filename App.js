import React, { useState } from "react";
import { I18nManager } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import AppLoading from "expo-app-loading";

import getFonts from "./app/utils/fonts";
import StackNavigator from "./app/containers/StackNavigator";

//* Support for RTL
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const App = () => {
    const [fontLoading, setFontLoading] = useState(false);

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
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    );
}

export default App;


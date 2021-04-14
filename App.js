import React, { useState } from "react";
import { I18nManager, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Welcome from "./app/components/Welcome";

//* Support for RTL
I18nManager.allowRTL(true);
I18nManager.forceRTL(true);

const Stack = createStackNavigator();

const getFonts = () =>
    Font.loadAsync({
        yekan: require("./app/assets/fonts/byekan.ttf"),
        ih: require("./app/assets/fonts/ih.ttf"),
    });

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
            <Stack.Navigator>
                <Stack.Screen name="Welcome" component={Welcome} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default App;


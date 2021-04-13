import React from "react"
import { I18nManager } from 'react-native';
import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import * as Font from "expo-font"
import { AppLoading } from "expo"
import { useState } from "react"

// Support for RTL
I18nManager.allowRTL(true)
I18nManager.forceRTL(true)

const Stack = createStackNavigator()

const getFonts = () =>
    Font.loadAsync({
        yekan: require("./app/assets/fonts/byekan"),
        ih: require("./app/assets/fonts/ih")
    })

export default function App() {
    const [fontLoading, setFontLoading] = useState(false)

    if (fontLoading) {
        return (
            <NavigationContainer>
                <Stack.Navigator>
                    <Stack.Screen name="Welcome"  />
                </Stack.Navigator>
            </NavigationContainer>
        )
    } else {
        return (
            <AppLoading
                startAsync={getFonts}
                onFinish={() => setFontLoading(true)}
            />
        )
    }
}

const styles = StyleSheet.create({})


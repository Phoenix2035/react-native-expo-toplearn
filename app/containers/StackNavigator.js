import React from 'react'
import { createStackNavigator } from "@react-navigation/stack";

import { WelcomeScreen, LoginScreen, RegisterScreen } from "../screens"

import TabNavigator from "./TabNavigator";


export default function StackNavigator() {
    const Stack = createStackNavigator();
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
            <Stack.Screen name="TabNavigator" component={TabNavigator} />
        </Stack.Navigator>
    )
}


import React from 'react'
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import Screen from '../components/shared/Screen'
import { CoursesScreen, NewCoursesScreen, TopCoursesScreen } from '../screens'

const TopTab = createMaterialTopTabNavigator()

export default function TopTabNavigator() {
    return (
        <Screen>
            <TopTab.Navigator
                initialRouteName="AllCourses"
                backBehavior="none"
                tabBarOptions={{
                    activeTintColor: "tomato",
                    inactiveTintColor: "gray",
                    labelStyle: {
                        fontFamily: "ih",
                        fontSize: 14,
                    },
                    style: { backgroundColor: "#f8f4f4" }
                }}
            >

                <TopTab.Screen
                    name="AllCourses"
                    component={CoursesScreen}
                    options={
                        { tabBarLabel: "همه دوره ها" }
                    } />

                <TopTab.Screen
                    name="NewCourses"
                    component={NewCoursesScreen}
                    options={
                        { tabBarLabel: "دوره های جدید" }
                    } />

                <TopTab.Screen
                    name="TopCourses"
                    component={TopCoursesScreen}
                    options={
                        { tabBarLabel: "دوره های محبوب" }
                    } />
            </TopTab.Navigator>
        </Screen>
    )
}


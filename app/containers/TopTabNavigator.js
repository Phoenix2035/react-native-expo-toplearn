import React, {useEffect } from 'react'
import { RFPercentage } from "react-native-responsive-fontsize"
import { useDispatch } from "react-redux"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import Screen from '../components/shared/Screen'
import { CoursesScreen, NewCoursesScreen, TopCoursesScreen } from '../screens'
import { loadingToast } from '../utils/toast'
import Toast from "react-native-tiny-toast";
import { getCourses } from "../redux/actions"

const TopTab = createMaterialTopTabNavigator()

export default function TopTabNavigator() {
    const dispatch = useDispatch()

    useEffect(() => {
        try {
            const fetchData = async () => {
                loadingToast("در حال بارگذاری...")
                dispatch(getCourses())
                Toast.hide()
            }
            fetchData()

        } catch (error) {
            console.log(error)
            Toast.hide()
        }
    }, [])

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
                            fontSize: RFPercentage(1.9),
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


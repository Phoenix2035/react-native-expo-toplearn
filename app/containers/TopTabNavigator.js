import React, { useState, useEffect } from 'react'
import { RFPercentage } from "react-native-responsive-fontsize"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import Screen from '../components/shared/Screen'
import { CoursesScreen, NewCoursesScreen, TopCoursesScreen } from '../screens'
import { fetchCourses } from "../api/courses"
import { loadingToast } from '../utils/toast'
import Context from '../context'
import Toast from "react-native-tiny-toast";

const TopTab = createMaterialTopTabNavigator()

export default function TopTabNavigator() {
    const [courses, setCourses] = useState([])

    useEffect(() => {
        try {
            const fetchData = async () => {
                loadingToast("در حال بارگذاری...")
                const courses = await fetchCourses()
                setCourses(courses)
                Toast.hide()
            }
            fetchData()

        } catch (error) {
            console.log(error)
            Toast.hide()
        }
    }, [])

    return (
        <Context.Provider value={{
            courses
        }}>
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
        </Context.Provider>
    )
}


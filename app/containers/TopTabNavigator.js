import React, { useState, useEffect } from 'react'
import { ActivityIndicator, StyleSheet } from "react-native"
import { RFPercentage } from "react-native-responsive-fontsize"
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs"

import Screen from '../components/shared/Screen'
import { CoursesScreen, NewCoursesScreen, TopCoursesScreen } from '../screens'
import { fetchCourses } from "../api"
import Context from '../context'

const TopTab = createMaterialTopTabNavigator()

export default function TopTabNavigator() {
    const [courses, setCourses] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const fetchData = async () => {
            const courses = await fetchCourses()
            setCourses(courses)
            setLoading(false)
        }

        fetchData()
    }, [])

    return (
        <Context.Provider value={{
            courses,
            loading
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
                {
                    loading ?
                        <ActivityIndicator style={styles.loadingContainer} size="large" color="tomato" animating={loading} />
                        :
                        null
                }
            </Screen>
        </Context.Provider>
    )
}

const styles = StyleSheet.create({
    loadingContainer: {
        flex: 1,
        position: "absolute",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
    }
})
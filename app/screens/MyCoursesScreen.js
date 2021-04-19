import React, { useState } from 'react'
import { View, StyleSheet, TouchableOpacity, FlatList } from 'react-native'
import { MaterialCommunityIcons } from "@expo/vector-icons"
import Swipeable from 'react-native-gesture-handler/Swipeable'


import CustomText from '../components/shared/CustomText'
import ItemSeparator from '../components/shared/ItemSeparator'
import Screen from '../components/shared/Screen'

const deleteAction = (course, onPress) => {
    return (
        <TouchableOpacity onPress={() => { }}>
            <View style={{
                width: 55,
                height: "100%",
                backgroundColor: "tomato",
                justifyContent: "center",
                alignItems: "center"
            }}>

                <MaterialCommunityIcons name="trash-can" size={35} color="#fff" />

            </View>

        </TouchableOpacity>
    )
}


export default function MyCoursesScreen() {

    const [myCourses, setMyCourses] = useState([
        { id: 1, title: "دوره جامع NodeJs", master: "علی قدوسی" },
        { id: 2, title: "دوره جامع React Native", master: "علی قدوسی" },
        { id: 3, title: "دوره جامع ReactJs", master: "علی قدوسی" },
        { id: 4, title: "دوره جامع ElectronJs", master: "علی قدوسی" },
        { id: 5, title: "دوره جامع جاوااسکریپت", master: "علی قدوسی" },
        { id: 6, title: "دوره جامع جاوااسکریپت", master: "علی قدوسی" },
        { id: 7, title: "دوره جامع جاوااسکریپت", master: "علی قدوسی" },
    ])

    return (
        <Screen style={{ alignItems: 'center' }}>
            <View style={styles.title}>
                <CustomText fontFamily="yekan" size="3" color="#fff">
                    لیست دوره های من
                </CustomText>
            </View>

            <ItemSeparator height={5} />

            <View style={{ width: "100%", flex: 1 }}>
                <FlatList
                    data={myCourses}
                    keyExtractor={c => c.id.toString()}
                    renderItem={({ item }) => (
                        <View style={{ marginVertical: 7 }}>

                            <ItemSeparator height={3} />

                            <Swipeable renderRightActions={deleteAction} >

                                <View style={styles.container}>

                                    <View style={styles.details}>

                                        <CustomText
                                            fontFamily="yekan"
                                            size="2.5"
                                        >
                                            {item.title}
                                        </CustomText>

                                        <CustomText fontFamily="yekan" size="1.6">
                                            {`مدرس دوره: ${item.master}`}
                                        </CustomText>

                                    </View>

                                </View>
                            </Swipeable>

                            <ItemSeparator height={3} />

                        </View>
                    )}
                />
            </View>
        </Screen>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        justifyContent: "center",
        padding: 15,
        backgroundColor: "dodgerblue",
    },
    title: {
        width: "90%",
        marginVertical: 20,
        backgroundColor: "tomato",
        padding: 10,
        borderRadius: 10,
        alignItems: "center"
    },
    details: {
        width: "100%",
        backgroundColor: "#f8f4f4",
        padding: 10,
        alignItems: "center",
        borderRadius: 14
    },
})

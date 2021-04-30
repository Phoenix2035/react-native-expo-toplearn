import React from 'react'
import { StyleSheet, FlatList, TouchableOpacity } from 'react-native'
import { useSelector } from "react-redux"

import Card from '../components/shared/Card'
import Screen from '../components/shared/Screen'


export default function TopCoursesScreen({ navigation }) {

    const courses = useSelector(state => state.courses)

    return (
        <Screen style={styles.container}>
            <FlatList
                data={courses}
                keyExtractor={course => course._id.toString()}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        onPress={() =>
                            navigation.navigate("CourseDetails", {
                                course: item,
                            })
                        }
                    >
                        <Card
                            title={item.title}
                            time="15:00:00"
                            price={item.price}
                            image={item.imageUrl}
                            teacher="علی قدوسی"
                        />
                    </TouchableOpacity>
                )}
            />
        </Screen>
    )
}


const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f8f4f4",

    }
})

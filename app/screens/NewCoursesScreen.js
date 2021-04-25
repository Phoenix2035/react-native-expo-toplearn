import React, { useContext } from 'react'
import { StyleSheet, FlatList } from 'react-native'
import Card from '../components/shared/Card'
import Screen from '../components/shared/Screen'
import Context from '../context'



export default function NewCoursesScreen() {

    const { courses } = useContext(Context)

    return (
        <Screen style={styles.container}>
            <FlatList
                data={courses}
                keyExtractor={course => course._id.toString()}
                renderItem={({ item }) => (
                    <Card
                        title={item.title}
                        time="15:00:00"
                        price={item.price}
                        image={item.imageUrl}
                        teacher="علی قدوسی"
                    />
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

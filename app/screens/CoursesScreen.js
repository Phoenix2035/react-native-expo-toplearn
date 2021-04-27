import React, {useContext} from "react";
import {TouchableOpacity, StyleSheet, FlatList} from "react-native";

import Screen from "./../components/shared/Screen";
import Card from "./../components/shared/Card";
import Context from "../context";

const CoursesScreen = ({navigation}) => {
    const {courses} = useContext(Context)


    return (
        <Screen style={styles.container}>
            <FlatList
                data={courses}
                keyExtractor={(course) => course._id.toString()}
                renderItem={({item}) => (
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
                            info={item.info}
                        />
                    </TouchableOpacity>
                )}
            />
        </Screen>
    );
};

export default CoursesScreen;

const styles = StyleSheet.create({
    container: {
        padding: 20,
        backgroundColor: "#f8f4f4",
    }
});

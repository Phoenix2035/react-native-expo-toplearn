import React, {useState} from "react";
import {
    Alert,
    View,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from "react-native";
import {MaterialCommunityIcons} from "@expo/vector-icons";
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Screen from "./../components/shared/Screen";
import CustomText from "./../components/shared/CustomText";
import ItemSeparator from "./../components/shared/ItemSeparator";

const confirmationAlert = (course, onPress) => {
    return Alert.alert(
        course.title,
        `مطمئنی می خوای  ${course.title} رو از لیست دوره هات پاک کنی`,
        [
            {
                text: "انصراف",
                onPress: () => {
                },
                style: "cancel",
            },
            {
                text: "آره ، پاک کن",
                onPress: onPress,
            },
        ],
        {cancelable: false}
    );
};

const deleteAction = (course, onPress) => {
    return (
        <TouchableOpacity onPress={() => confirmationAlert(course, onPress)}>
            <View
                style={{
                    backgroundColor: "tomato",
                    width: 50,
                    height: "100%",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                <MaterialCommunityIcons
                    name="trash-can"
                    size={35}
                    color="#fff"
                />
            </View>
        </TouchableOpacity>
    );
};

const MyCoursesScreen = () => {
    const [getMyCourses, setMyCourse] = useState([
        {id: 1, title: "دوره جامع NodeJs", master: "یونس قربانی"},
        {id: 2, title: "دوره جامع React Native", master: "یونس قربانی"},
        {id: 3, title: "دوره جامع ReactJs", master: "یونس قربانی"},
        {id: 4, title: "دوره جامع ElectronJs", master: "یونس قربانی"},
        {id: 5, title: "دوره جامع جاوااسکریپت", master: "یونس قربانی"},
    ]);

    const handleDelete = (course) => {
        setMyCourse(getMyCourses.filter((c) => c.id !== course.id));
    };

    return (
        <Screen style={{alignItems: "center"}}>
            <View style={styles.title}>
                <CustomText fontFamily="yekan" size="3" color="#fff">
                    لیست دوره های من
                </CustomText>
            </View>
            <ItemSeparator height={5}/>
            <View style={{width: "100%"}}>
                <FlatList
                    data={getMyCourses}
                    keyExtractor={(c) => c.id.toString()}
                    renderItem={({item}) => (
                        <View style={{marginVertical: 7}}>
                            <ItemSeparator height={3}/>
                            <Swipeable
                                renderRightActions={() =>
                                    deleteAction(item, () => handleDelete(item))
                                }
                            >
                                <View style={styles.container}>
                                    <View style={styles.details}>
                                        <CustomText
                                            fontFamily="yekan"
                                            size="2.5"
                                        >
                                            {item.title}
                                        </CustomText>
                                        <CustomText
                                            fontFamily="yekan"
                                            size="1.5"
                                        >
                                            {`مدرس دوره : ${item.master} `}
                                        </CustomText>
                                    </View>
                                </View>
                            </Swipeable>
                            <ItemSeparator height={3}/>
                        </View>
                    )}
                />
            </View>
        </Screen>
    );
};

export default MyCoursesScreen;

const styles = StyleSheet.create({
    title: {
        marginVertical: 20,
        backgroundColor: "tomato",
        padding: 10,
        borderRadius: 10,
        width: "90%",
        alignItems: "center",
    },
    container: {
        flexDirection: "row",
        padding: 15,
        backgroundColor: "dodgerblue",
        justifyContent: "center",
    },
    details: {
        marginLeft: 10,
        backgroundColor: "#f8f4f4",
        width: "100%",
        padding: 10,
        borderRadius: 14,
        alignItems: "center",
    },
});

import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'
import { numSeparator } from "../../utils/priceSeparator"
import CustomText from './CustomText'


export default function Card({ title, image, price, teacher, time }) {
    return (
        <View style={styles.card}>
            <Image source={image} style={styles.courseImage} />
            <View style={{ padding: 20 }}>

                <CustomText
                    size="3"
                    fontFamily="yekan"
                    styles={styles.title}>{title}</CustomText>

                <View style={styles.courseDetails}>
                    <CustomText
                        size="2"
                        fontFamily="yekan"
                        styles={styles.price}>
                        {`قیمت دوره: ${numSeparator(price)} تومان`}
                    </CustomText>

                    <CustomText
                        size="2"
                        fontFamily="yekan"
                        styles={styles.time}>زمان دوره: {time}</CustomText>
                </View>

                <View style={styles.userContainer}>
                    <CustomText
                        size="2"
                        fontFamily="ih"
                        styles={styles.teacher}>مدرس دوره: {teacher}</CustomText>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20,
        overflow: "hidden"
    },
    courseImage: {
        width: "100%",
        height: 300,
    },
    courseDetails: {
        flexDirection: "row",
        justifyContent: "space-between"
    },
    userContainer: {
        marginVertical: 10
    },
    title: {
        marginBottom: 7,
        alignSelf: "center"
    },
    teacher: {
        alignSelf: "center"
    }

})

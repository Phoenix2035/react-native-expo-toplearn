import React from 'react'
import { StyleSheet, View, Image, ScrollView } from 'react-native'
import { numSeparator } from "../../utils/priceSeparator"
import CustomText from './CustomText'


export default function Card({ title, image, price, teacher, time, courseInfo = null }) {
    return (
        <View style={styles.card}>
            <Image resizeMode="contain" source={{
                uri: `https://rnapi.ghorbany.dev/${image}`
            }} style={styles.courseImage} />
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
                        قیمت دوره:
                        {price === 0 ? " رایگان " : ` ${numSeparator(price)} تومان`}
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
            {courseInfo ? (
                <View style={{ flex: 1 }}>
                    <CustomText fontFamily="yekan" size="4">
                        توضیحات دوره :
                    </CustomText>
                    <ScrollView>
                        <CustomText
                            fontFamily="ih"
                            size="1.7"
                            styles={styles.courseInformation}
                        >
                            {courseInfo}
                        </CustomText>
                    </ScrollView>
                </View>
            ) : null}
        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        flex: 1,
        borderRadius: 15,
        backgroundColor: "white",
        marginBottom: 20,
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
    },
    courseInformation: {
        textAlign: "justify",
        marginVertical: 1,
        lineHeight: 25,
    }

})

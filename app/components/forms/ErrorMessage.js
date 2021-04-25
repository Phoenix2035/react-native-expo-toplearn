import React from 'react'
import {StyleSheet, Text} from 'react-native'
import CustomText from '../shared/CustomText'


export default function ErrorMessage({error, visible}) {

    if (!visible || !error) return null

    return (
        <CustomText
            size="2"
            fontFamily="ih"
            styles={styles.error}
        >
            {error}
        </CustomText>
    )
}

const styles = StyleSheet.create({
    error: {
        color: "red",
        marginBottom: 8
    }
})

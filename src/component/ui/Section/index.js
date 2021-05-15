import React from 'react'
import {View,Text} from 'react-native'
import styles from './style'

const Section = () =>{
    return(
        <View style={styles.container}>
            <View style={styles.line}></View>
            <Text style={styles.text}>or</Text>
            <View style={styles.line}></View>
        </View>
    )
}

export default Section;
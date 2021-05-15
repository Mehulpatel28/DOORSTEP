import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import styles from './style'


export default class SocialButton extends Component {
  render() {
    return (
      <TouchableOpacity style={styles.button} onPress={this.props.onPress}>
        <LinearGradient colors={['#0C1B32', '#01ab9d']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 0 }} style={styles.gradient}>
          <Text style={styles.text} >{this.props.name}</Text>
        </LinearGradient>
      </TouchableOpacity>
    )
  }
}




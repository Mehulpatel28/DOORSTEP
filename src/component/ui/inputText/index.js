import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import {Color} from '../../../utils/Color'
// import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const InputText = (props) => {
    return (
      <View style={styles.main}>
      
        <Icon 
        name={props.iconname}   
        style={styles.iconStyle} 
        />
        <TextInput 
        style={styles.username} 
        placeholder={props.placeholder} 
        onChangeText={props.onChangeText} 
        secureTextEntry={Boolean(props.secureTextEntry)}  
        value={props.value}
        maxLength={props.maxLength}
        />
      </View>
    );
  }
  const styles = StyleSheet.create({
  username: {
    height: 40,
    width: 400,
    paddingLeft: 50,
    justifyContent: 'space-between',
    borderColor:Color.PRIMARY,
    marginTop: 9 ,
    marginBottom:5,
    marginLeft: 5,
    fontSize : 18
  },
  main: {
    flexDirection: 'row',
    margin:7,
    width: 340,
    borderRadius : 20,
    marginLeft:40,
    backgroundColor :Color.WHITE,
  },
  iconStyle:{ 
    position: 'absolute',
    left: 10,
    top: 10,
    color:  Color.BLACK,
    fontSize:32,
    fontWeight: 'bold'
},
});
export default InputText;
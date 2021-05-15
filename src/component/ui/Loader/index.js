// import React from 'react';
// import { View, ActivityIndicator, StyleSheet, Image } from 'react-native';
// import Spinner from 'react-native-loading-spinner-overlay';

// function Loader(props) {
//     return (
//         <Spinner
//             visible={props.visible}
//         >
//             <View style={[Style.container]}>
//                 <Image
//                     style={[Style.img]}
//                     source={require("../../../assets/Img/loader.gif")}
//                 />
//             </View>
//         </Spinner>
//     )
// }

// const Style = StyleSheet.create({
//     container: {
//         flex: 1,
//         flexDirection: 'column',
//         justifyContent: 'center',
//         alignItems: 'center',
//         alignContent: 'center',
//     },
//     img: {
//         flex: 1,
//         maxWidth: 100,
//         maxHeight: 100
//     }
// })
// export default Loader;

import React, { Component } from 'react'
import { ActivityIndicator, Text, View } from 'react-native'

export class Loader extends Component {
    render() {
        return (
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
               <ActivityIndicator size={this.props.size} color={this.props.color} />
            </View>
        )
    }
}

export default Loader






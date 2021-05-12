import React, {Component} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {CommonActions} from '@react-navigation/routers';

class Home extends Component {
  resetStack = CommonActions.reset({
    index: 0,
    routes: [{name: 'SplashScreen'}],
  });

  removeAuthentication = async () => {
    try {
      await AsyncStorage.clear();
      this.props.navigation.dispatch(this.resetStack);
    } catch (e) {}
  };

  render() {
    return (
      <View>
        <Text> Home Screen </Text>
        <TouchableOpacity
          style={{
            height: 50,
            width: 150,
            backgroundColor: '#000',
            borderRadius: 25,
            marginTop: 12,
            alignSelf: 'center',
          }}
          onPress={this.removeAuthentication}>
          <Text
            style={{
              justifyContent: 'center',
              alignSelf: 'center',
              color: 'white',
              fontSize: 25,
              fontWeight: 'bold',
              marginTop: 5,
            }}>
            Logout
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}

export default Home;

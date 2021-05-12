import React, {Component} from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../screen/Home/index';
import Routes from './routes';



const Stack = createStackNavigator();

const Authenticated = () => {
  return (
    <Stack.Navigator>
            <Stack.Screen name={Routes.Home} component={Home} />
    </Stack.Navigator>
  );
};

export default Authenticated;

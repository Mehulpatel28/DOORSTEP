import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screen/SignUp/index';
import Login from '../screen/Login/index';
import Routes from './routes'
import Auth from './Auth';

const Stack = createStackNavigator();

const NotAuthenticated = () => {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false
            }}
            // initialRouteName={Routes.Login}
        >
            <Stack.Screen name={Routes.Login} component={Login} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.SignUp} component={SignUp} options={{ headerShown: false }} />
            <Stack.Screen name={Routes.Auth} component={Auth} />
        </Stack.Navigator>
    );
}

export default NotAuthenticated;
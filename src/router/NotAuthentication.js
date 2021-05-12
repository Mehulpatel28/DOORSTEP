import React, { Component } from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import SignUp from '../screen/SignUp/index';
import Auth from '../Authentication/Auth';
import Login from '../screen/Login/index';
import Routes from './routes'

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
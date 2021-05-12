import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import NonAuthenticated from './NotAuthentication'
import Authenticated from './Authentication'
import SplashScreen from '../screen/SplashScreen/index';
import Routes from "./routes";

const Stack = createStackNavigator();

export const RootNavigator = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                initialRouteName={Routes.SplashScreen}
                screenOptions={{
                    headerShown: false
                }}
            >
                <Stack.Screen name={Routes.SplashScreen} component={SplashScreen} />
                <Stack.Screen name={Routes.NotAuthenticated} component={NonAuthenticated} />
                <Stack.Screen name={Routes.Authenticated} component={Authenticated} />
            </Stack.Navigator>
        </NavigationContainer>
    );
}




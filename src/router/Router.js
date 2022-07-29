import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import SCREEN_LIST from './screen-list';
import Health from '../screens/Health/Health';
import Main from '../screens/Main/Main';

const Stack = createNativeStackNavigator();

export default function Navigate() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name={SCREEN_LIST.Main} component={Main} />
        <Stack.Screen name={SCREEN_LIST.Health} component={Health} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

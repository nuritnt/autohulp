import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack';

import Welcome from './views/Welcome.js'
import AddCar from './views/AddCar.js'

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="AddCar" component={AddCar} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

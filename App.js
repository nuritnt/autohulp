import 'react-native-gesture-handler';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { ApolloProvider } from '@apollo/client';
import { ApolloClient, InMemoryCache } from '@apollo/client';

import Welcome from './views/Welcome.js'
import AddCar from './views/AddCar.js'
import EnterCode from './views/EnterCode.js'

const client = new ApolloClient({
  uri: 'https://solid-imp-61.hasura.app',
  cache: new InMemoryCache()
});

const Stack = createStackNavigator();

export default function App() {
  return (
    <ApolloProvider client={client}>

      <NavigationContainer>
        <Stack.Navigator initialRouteName="Welcome">
          <Stack.Screen name="Welcome" component={Welcome} />
          <Stack.Screen name="AddCar" component={AddCar} />
          <Stack.Screen name="EnterCode" component={EnterCode} />
        </Stack.Navigator>
      </NavigationContainer>
    </ApolloProvider>
  );
}

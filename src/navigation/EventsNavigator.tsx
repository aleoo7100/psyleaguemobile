import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import EventsS from '../features/events/EventsS';

const Stack = createNativeStackNavigator();

export default function EventsNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Eventos" component={EventsS} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

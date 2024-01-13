import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EventsS from '../features/events/EventsS';
import {NavigationContainer} from '@react-navigation/native';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Eventos" component={EventsS} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import EventsS from '../features/events/EventsS';

const Tab = createBottomTabNavigator();

export default function MainTabNavigator() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Eventos" component={EventsS} />
    </Tab.Navigator>
  );
}

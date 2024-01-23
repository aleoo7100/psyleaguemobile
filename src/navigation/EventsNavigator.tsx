import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsS from '../features/events/EventsS';
import EventDetailS from '../features/events/eventDetail/EventDetailS';

const Stack = createNativeStackNavigator<EventsStackParamList>();

export default function EventsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="events" component={EventsS} />
      <Stack.Screen name="eventDetail" component={EventDetailS} />
    </Stack.Navigator>
  );
}

export type EventsStackParamList = {
  events: undefined;
  eventDetail: { events_id: string };
};

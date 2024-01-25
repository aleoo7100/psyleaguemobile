import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import EventsS from '../features/events/EventsS';
import EventDetailS from '../features/events/eventDetail/EventDetailS';
import Header1 from '../common/components/headers/Header1';
import Header2 from '../common/components/headers/Header2';

const Stack = createNativeStackNavigator<EventsStackParamList>();

export default function EventsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        statusBarColor: '#000',
        statusBarTranslucent: false,
      }}>
      <Stack.Screen
        options={{ header: () => <Header1 title="EVENTOS" /> }}
        name="events"
        component={EventsS}
      />
      <Stack.Screen
        options={{ header: () => <Header2 title="EVENTO" /> }}
        name="eventDetail"
        component={EventDetailS}
      />
    </Stack.Navigator>
  );
}

export type EventsStackParamList = {
  events: undefined;
  eventDetail: { events_id: string };
};

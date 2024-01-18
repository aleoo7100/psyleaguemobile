import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import VideosS from '../features/videos/VideosS';

const Stack = createNativeStackNavigator();

export default function VideosNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Videos" component={VideosS} />
    </Stack.Navigator>
  );
}

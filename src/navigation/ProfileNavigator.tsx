import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileS from '../features/profile/ProfileS';

const Stack = createNativeStackNavigator();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Perfil" component={ProfileS} />
    </Stack.Navigator>
  );
}

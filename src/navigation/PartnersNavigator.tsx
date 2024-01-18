import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PartnersS from '../features/partners/PartnersS';

const Stack = createNativeStackNavigator();

export default function PartnersNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Colaboradores" component={PartnersS} />
    </Stack.Navigator>
  );
}

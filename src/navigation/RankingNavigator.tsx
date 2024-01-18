import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RankingS from '../features/ranking/RankingS';

const Stack = createNativeStackNavigator();

export default function RankingNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Ranking" component={RankingS} />
    </Stack.Navigator>
  );
}

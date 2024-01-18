import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsS from '../features/news/NewsS';

const Stack = createNativeStackNavigator<NewsStackParamList>();

export default function NewsNavigator() {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="News" component={NewsS} />
      {/* <Stack.Screen name="NewDetail" component={NewsS} /> */}
    </Stack.Navigator>
  );
}

export type NewsStackParamList = {
  News: undefined;
  // NewDetail: undefined; //TODO: add input data to screen
};

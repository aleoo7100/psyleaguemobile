import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import NewsS from '../features/news/NewsS';
import NewDetailS from '../features/news/newDetail/NewDetailS';
import Header1 from '../common/components/headers/Header1';
import Header2 from '../common/components/headers/Header2';

const Stack = createNativeStackNavigator<NewsStackParamList>();

export default function NewsNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        statusBarColor: '#000',
        statusBarTranslucent: false,
      }}>
      <Stack.Screen
        options={{ header: () => <Header1 title="ARTÍCULOS" /> }}
        name="news"
        component={NewsS}
      />
      <Stack.Screen
        options={{ header: () => <Header2 title="ARTÍCULO" /> }}
        name="newDetail"
        component={NewDetailS}
      />
    </Stack.Navigator>
  );
}

export type NewsStackParamList = {
  news: undefined;
  newDetail: { news_id: string };
};

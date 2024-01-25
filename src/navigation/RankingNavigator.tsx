import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RankingS from '../features/ranking/RankingS';
import Header1 from '../common/components/headers/Header1';
import RankingDetailS from '../features/ranking/rankingDetail/RankingDetailS';
import Header2 from '../common/components/headers/Header2';

const Stack = createNativeStackNavigator<RankingStackParamList>();

export default function RankingNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        statusBarColor: '#000',
        statusBarTranslucent: false,
      }}>
      <Stack.Screen
        options={{ header: () => <Header1 title="RANKING" /> }}
        name="ranking"
        component={RankingS}
      />
      <Stack.Screen
        options={{ header: () => <Header2 title="RANKING" /> }}
        name="rankingdDetail"
        component={RankingDetailS}
      />
    </Stack.Navigator>
  );
}

export type RankingStackParamList = {
  ranking: undefined;
  rankingdDetail: { users_id: string };
};

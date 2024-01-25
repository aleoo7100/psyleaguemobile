import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import PartnersS from '../features/partners/PartnersS';
import Header1 from '../common/components/headers/Header1';
import Header2 from '../common/components/headers/Header2';
import PartnerDetailS from '../features/partners/partnerDetail/PartnerDetailS';

const Stack = createNativeStackNavigator<PartnersStackParamList>();

export default function PartnersNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        statusBarColor: '#000',
        statusBarTranslucent: false,
      }}>
      <Stack.Screen
        options={{ header: () => <Header1 title="PARTNERS" /> }}
        name="partners"
        component={PartnersS}
      />
      <Stack.Screen
        options={{ header: () => <Header2 title="PARTNER" /> }}
        name="partnerDetail"
        component={PartnerDetailS}
      />
    </Stack.Navigator>
  );
}
export type PartnersStackParamList = {
  partners: undefined;
  partnerDetail: { partners_id?: string; streamers_id?: string };
};

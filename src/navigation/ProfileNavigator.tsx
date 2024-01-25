import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import ProfileS from '../features/profile/ProfileS';
import Header1 from '../common/components/headers/Header1';

const Stack = createNativeStackNavigator<ProfileStackParamList>();

export default function ProfileNavigator() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerTransparent: true,
        statusBarColor: '#000',
        statusBarTranslucent: false,
      }}>
      <Stack.Screen
        options={{ header: () => <Header1 title="PERFIL" /> }}
        name="profile"
        component={ProfileS}
      />
    </Stack.Navigator>
  );
}

export type ProfileStackParamList = {
  profile: undefined;
};

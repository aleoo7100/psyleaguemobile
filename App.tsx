import React from 'react';
import MainTabNavigation from './src/navigation/MainTabNavigator';
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <MainTabNavigation />
    </NavigationContainer>
  );
}

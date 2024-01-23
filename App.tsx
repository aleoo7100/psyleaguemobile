import React from 'react';
import MainTabNavigation from './src/navigation/MainTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider } from '@apollo/client';
import client from './src/common/helpers/apolloClient';

export default function App() {
  return (
    <ApolloProvider client={client}>
      <NavigationContainer>
        <MainTabNavigation />
      </NavigationContainer>
    </ApolloProvider>
  );
}

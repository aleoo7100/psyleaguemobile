import React, { useEffect, useState } from 'react';
import MainTabNavigation from './src/navigation/MainTabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { ApolloProvider, ApolloQueryResult } from '@apollo/client';
import client from './src/common/helpers/apolloClient';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';
import { UserProvider } from './src/common/context/userContext';
import { Get_My_Profile_QueryQuery, Users } from './src/__generated__/graphql';
import { GET_MY_PROFILE_QUERY } from './src/common/helpers/queries';

export default function App() {
  const [user, setUser] = useState<Users>();

  async function onAuthStateChanged(
    userFirebase: FirebaseAuthTypes.User | null,
  ) {
    console.log('userFirebase', userFirebase);
    if (userFirebase) {
      const result = await client.query({
        query: GET_MY_PROFILE_QUERY,
        variables: { email: userFirebase.email! },
      });
      if (result.data?.users?.[0]) {
        setUser(result.data.users[0] as Users);
      }
    }
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <UserProvider user={user} setUser={setUser}>
      <ApolloProvider client={client}>
        <NavigationContainer>
          <MainTabNavigation />
        </NavigationContainer>
      </ApolloProvider>
    </UserProvider>
  );
}

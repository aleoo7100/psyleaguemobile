import React from 'react';
import styled from 'styled-components/native';
import { Background } from '../../common/components/Layout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { SafeAreaView } from 'react-native-safe-area-context';
import { ProfileStackParamList } from '../../navigation/ProfileNavigator';
import { TextT1 } from '../../common/components/Text';

type ScreenProps = NativeStackScreenProps<ProfileStackParamList, 'profile'>;

export default function ProfileS(props: ScreenProps) {
  return (
    <SafeAreaView>
      <Container>
        <Background />
        <TextT1>Profile</TextT1>
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 60px;
  background-color: #000;
`;

import React from 'react';
import styled from 'styled-components/native';
import { Layout1 } from '../../common/components/Layout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { ProfileStackParamList } from '../../navigation/ProfileNavigator';
import { TextT1 } from '../../common/components/Text';

type ScreenProps = NativeStackScreenProps<ProfileStackParamList, 'profile'>;

export default function ProfileS(props: ScreenProps) {
  return (
    <Layout1>
      <TextT1>Profile</TextT1>
    </Layout1>
  );
}

const Container = styled.View``;

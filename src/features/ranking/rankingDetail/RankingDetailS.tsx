import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { RankingStackParamList } from '../../../navigation/RankingNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Background } from '../../../common/components/Layout';

type ScreenProps = NativeStackScreenProps<
  RankingStackParamList,
  'rankingdDetail'
>;

export default function RankingDetailS(props: ScreenProps) {
  return (
    <SafeAreaView>
      <Container>
        <Background />
        <Text>RankingDetailS</Text>
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
const Text = styled.Text``;

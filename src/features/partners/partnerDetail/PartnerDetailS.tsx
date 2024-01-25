import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { PartnersStackParamList } from '../../../navigation/PartnersNavigator';
import { SafeAreaView } from 'react-native-safe-area-context';
import { TextT1 } from '../../../common/components/Text';
import { Background } from '../../../common/components/Layout';

type ScreenProps = NativeStackScreenProps<
  PartnersStackParamList,
  'partnerDetail'
>;

export default function PartnerDetailS(props: ScreenProps) {
  return (
    <SafeAreaView>
      <Container>
        <Background />
        <TextT1>PartnerDetailS</TextT1>
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

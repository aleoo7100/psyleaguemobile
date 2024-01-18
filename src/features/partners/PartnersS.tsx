import React from 'react';
import styled from 'styled-components/native';
import Header1 from '../../common/components/headers/Header1';
import { Background } from '../../common/components/Layout';

export default function PartnersS() {
  return (
    <Container>
      <Background />
      <Header1 title="PARTNERS" />
      <Text>PartnersS</Text>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #000;
`;
const Text = styled.Text``;

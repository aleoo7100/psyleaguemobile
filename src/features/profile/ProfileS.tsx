import React from 'react';
import styled from 'styled-components/native';
import { Background } from '../../common/components/Layout';
import Header1 from '../../common/components/headers/Header1';

export default function ProfileS() {
  return (
    <Container>
      <Background />
      <Header1 title="PERFIL" />
      <Text>ProfileS</Text>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #000;
`;
const Text = styled.Text``;

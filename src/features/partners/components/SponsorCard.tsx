import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { TextT1 } from '../../../common/components/Text';

interface SponsorCardProps {
  name: string;
  image_url: string;
  onPress?: () => void;
}

export default function SponsorCard(props: SponsorCardProps) {
  return (
    <Container activeOpacity={1} onPress={props.onPress}>
      <Background
        source={{ uri: props.image_url }}
        defaultSource={require('../../../assets/images/defaultBackground.png')}
      />
      <BlackGradient colors={['#2220', '#0009', '#000e']} />
      <TextContainer>
        <TextT1 fontWeigth="Black" textColor="Main" TextSize="Large">
          {props.name?.toUpperCase()}
        </TextT1>
      </TextContainer>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  height: 100%;
  aspect-ratio: 1.5;
  border-radius: 26px;
  justify-content: space-between;
`;
const Background = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 26px;
`;
const BlackGradient = styled(LinearGradient)`
  width: 100%;
  height: 60%;
  bottom: 0;
  position: absolute;
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
`;
const TextContainer = styled.View`
  width: 100%;
  height: 100%;
  padding: 32px 12px;
  justify-content: flex-end;
`;

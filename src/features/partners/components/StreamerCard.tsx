import React from 'react';
import styled from 'styled-components/native';
import { TextT2 } from '../../../common/components/Text';

interface StreamerCardProps {
  name: string;
  nickname: string;
  photo: string;
  onPress?: () => void;
}

export default function StreamerCard(props: StreamerCardProps) {
  return (
    <Container activeOpacity={1} onPress={props.onPress}>
      <StreamerImage
        source={{ uri: props.photo }}
        defaultSource={require('../../../assets/images/defaultBackground.png')}
      />
      <TextT2 fontWeigth="Bold" numberOfLines={1}>
        {props.name}
      </TextT2>
      <TextT2 numberOfLines={1}>{props.nickname}</TextT2>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: 33.3333%;
  aspect-ratio: 0.9;
  align-items: center;
  margin-bottom: 16px;
`;
const StreamerImage = styled.Image`
  flex: 1;
  aspect-ratio: 0.9;
  border-radius: 16px;
`;

import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { TextT1, TextT2 } from './Text';

interface EventSimpleCardProps {
  title: string;
  date: string;
  points: number;
}

export default function EventSimpleCard(props: EventSimpleCardProps) {
  return (
    <Container
      colors={['#ED283C', '#AB0F1F']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}>
      <EventContainer1>
        <TextT1 TextSize="Large" fontWeigth="Black">
          {props.title}
        </TextT1>
        <TextT2 TextSize="Small">{props.date}</TextT2>
      </EventContainer1>
      <EventContainer2>
        <TextT1 TextSize={'Big'} fontWeigth={'Black'}>
          {props.points}
        </TextT1>
        <TextT2 TextSize="XSmall">Power ranking</TextT2>
      </EventContainer2>
    </Container>
  );
}

const Container = styled(LinearGradient)`
  width: 100%;
  min-height: 70px;
  padding: 12px 18px;
  background-color: #fff2;
  border-radius: 20px;
  margin-bottom: 8px;
  flex-direction: row;
`;
const EventContainer1 = styled.View`
  flex: 1;
`;
const EventContainer2 = styled.View`
  align-items: center;
`;

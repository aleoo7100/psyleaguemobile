import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import EventCard from './components/EventCard';
import eventsJson from './events.json';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EventsStackParamList } from '../../navigation/EventsNavigator';
import Header1 from '../../common/components/headers/Header1';
import { Background } from '../../common/components/Layout';

type EventsSProps = NativeStackScreenProps<EventsStackParamList, 'Events'>;

export default function EventsS(props: EventsSProps) {
  return (
    <Container>
      <Background />
      <Header1 title="EVENTOS" />
      <EventList
        data={eventsJson}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={() => <Footer />}
        renderItem={({ item }) => (
          <EventCard
            name={item.name}
            image={item.img}
            onPress={() => props.navigation.navigate('EventDetail')}
            eventDate={item.eventDate}
          />
        )}
        keyExtractor={item => String(item.id)}
      />
    </Container>
  );
}

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #000;
`;

const Separator = styled.View`
  width: 100%;
  height: 32px;
`;

const EventList = styled(FlatList)`
  width: 100%;
  padding: 24px;
  margin-top: 4px;
  padding-top: 0px;
` as unknown as typeof FlatList;
const Footer = styled.View`
  width: 100%;
  height: 100px;
`;

import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import EventCard from './components/EventCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EventsStackParamList } from '../../navigation/EventsNavigator';
import Header1 from '../../common/components/headers/Header1';
import { Background } from '../../common/components/Layout';
import useEventsS from './useEventsS';
import Loading from '../../common/components/Loading';

type EventsSProps = NativeStackScreenProps<EventsStackParamList, 'events'>;

export default function EventsS(props: EventsSProps) {
  const { data, loading } = useEventsS();
  return (
    <Container>
      <Background />
      <Header1 title="EVENTOS" />
      {loading ? (
        <Loading />
      ) : (
        <EventList
          data={data}
          ItemSeparatorComponent={() => <Separator />}
          ListFooterComponent={() => <Footer />}
          renderItem={({ item }) => (
            <EventCard
              name={item.title}
              image={item.thumbnail_url}
              onPress={() =>
                props.navigation.navigate('eventDetail', {
                  events_id: item.events_id,
                })
              }
              eventDate={item.start_date}
            />
          )}
          keyExtractor={item => String(item.events_id)}
        />
      )}
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
const LoadingContainer = styled.View`
  width: 100%;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

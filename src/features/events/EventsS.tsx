import React from 'react';
import { FlatList } from 'react-native';
import styled from 'styled-components/native';
import EventCard from './components/EventCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EventsStackParamList } from '../../navigation/EventsNavigator';
import { Layout1 } from '../../common/components/Layout';
import useEventsS from './useEventsS';

type ScreenProps = NativeStackScreenProps<EventsStackParamList, 'events'>;

export default function EventsS(props: ScreenProps) {
  const { data, loading, isRefreshing, refetch } = useEventsS();
  return (
    <Layout1 loading={loading && !isRefreshing}>
      <EventList
        data={data}
        refreshing={isRefreshing}
        onRefresh={refetch}
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
    </Layout1>
  );
}

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
  height: 80px;
`;

import React from 'react';
import styled from 'styled-components/native';
import Header1 from '../../common/components/headers/Header1';
import { Background } from '../../common/components/Layout';
import { FlatList } from 'react-native';
import newJson from './news.json';
import NewCard from './components/NewCard';
import { NewsStackParamList } from '../../navigation/NewsNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

type EventsSProps = NativeStackScreenProps<NewsStackParamList, 'News'>;

export default function NewsS({ navigation }: EventsSProps) {
  return (
    <Container>
      <Background />
      <Header1 title="NOTICIAS" />
      <NewsList
        data={newJson}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={() => <Footer />}
        renderItem={({ item }) => (
          <NewCard
            title={item.title}
            shortDescription={item.shortDescription}
            image={item.img}
            onPress={() => {}}
            // onPress={() => navigation.navigate('EventDetail')}
            date={item.date}
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
const NewsList = styled(FlatList)`
  width: 100%;
  padding: 24px;
  margin-top: 4px;
  padding-top: 0px;
` as unknown as typeof FlatList;
const Separator = styled.View`
  width: 100%;
  height: 32px;
`;
const Footer = styled.View`
  width: 100%;
  height: 100px;
`;

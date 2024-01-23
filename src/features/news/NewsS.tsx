import React from 'react';
import styled from 'styled-components/native';
import Header1 from '../../common/components/headers/Header1';
import { Background } from '../../common/components/Layout';
import { FlatList } from 'react-native';
import NewCard from './components/NewCard';
import { NewsStackParamList } from '../../navigation/NewsNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import Loading from '../../common/components/Loading';
import useNewsS from './useNewsS';

type EventsSProps = NativeStackScreenProps<NewsStackParamList, 'News'>;

export default function NewsS({ navigation }: EventsSProps) {
  const { data, loading } = useNewsS();
  return (
    <Container>
      <Background />
      <Header1 title="NOTICIAS" />
      {loading ? (
        <Loading />
      ) : (
        <NewsList
          data={data}
          ItemSeparatorComponent={() => <Separator />}
          ListFooterComponent={() => <Footer />}
          renderItem={({ item }) => (
            <NewCard
              title={item.title}
              shortDescription={item.short_description}
              image={item.thumbnail_url}
              onPress={() => {}}
              // onPress={() => navigation.navigate('EventDetail')}
              date={item.created_at}
            />
          )}
          keyExtractor={item => String(item.news_id)}
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

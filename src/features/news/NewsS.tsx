import React from 'react';
import styled from 'styled-components/native';
import { Layout1 } from '../../common/components/Layout';
import { FlatList } from 'react-native';
import NewCard from './components/NewCard';
import { NewsStackParamList } from '../../navigation/NewsNavigator';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import useNewsS from './useNewsS';

type ScreenProps = NativeStackScreenProps<NewsStackParamList, 'news'>;

export default function NewsS({ navigation }: ScreenProps) {
  const { data, loading, isRefreshing, refetch } = useNewsS();

  return (
    <Layout1 loading={loading && !isRefreshing}>
      <NewsList
        data={data}
        refreshing={isRefreshing}
        onRefresh={refetch}
        ItemSeparatorComponent={() => <Separator />}
        ListFooterComponent={() => <Footer />}
        renderItem={({ item }) => (
          <NewCard
            title={item.title}
            shortDescription={item.short_description}
            image={item.thumbnail_url}
            onPress={() =>
              navigation.navigate('newDetail', { news_id: item.news_id })
            }
            date={item.created_at}
          />
        )}
        keyExtractor={item => String(item.news_id)}
      />
    </Layout1>
  );
}

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
  height: 80px;
`;

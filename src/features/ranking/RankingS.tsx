import React from 'react';
import styled from 'styled-components/native';
import { BlankSpace, Layout1 } from '../../common/components/Layout';
import RankingCard from './components/RankingCard';
import { FlatList } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RankingStackParamList } from '../../navigation/RankingNavigator';
import useRankingS from './useRankingS';

type ScreenProps = NativeStackScreenProps<RankingStackParamList, 'ranking'>;

export default function RankingS(props: ScreenProps) {
  const { data, loading, refetch, isRefreshing } = useRankingS();

  return (
    <Layout1 loading={loading && !isRefreshing}>
      <RankingList
        data={data}
        refreshing={isRefreshing}
        onRefresh={refetch}
        ListHeaderComponent={() => <BlankSpace height={8} />}
        ItemSeparatorComponent={() => <BlankSpace height={12} />}
        renderItem={({ item, index }) => (
          <RankingCard
            onPress={() =>
              props.navigation.navigate('rankingdDetail', {
                users_id: item.users_id,
                ranking: index + 1,
              })
            }
            name={item.full_name || ''}
            points={item.ranking}
            nick_name={item.nick_name || ''}
            position={index + 1}
            avatar_url={item.avatar_url || ''}
          />
        )}
      />
    </Layout1>
  );
}

const RankingList = styled.FlatList`
  width: 100%;
  height: 100%;
  padding: 0 16px;
` as unknown as typeof FlatList;

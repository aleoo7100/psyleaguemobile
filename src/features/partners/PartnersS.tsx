import React from 'react';
import styled from 'styled-components/native';
import { BlankSpace, Layout1 } from '../../common/components/Layout';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { PartnersStackParamList } from '../../navigation/PartnersNavigator';
import { FlatList } from 'react-native';
import SponsorCard from './components/SponsorCard';
import StreamerCard from './components/StreamerCard';
import { TextT1 } from '../../common/components/Text';
import usePartnersS from './usePartnersS';

type ScreenProps = NativeStackScreenProps<PartnersStackParamList, 'partners'>;

export default function PartnersS(props: ScreenProps) {
  const { data, loading } = usePartnersS();

  return (
    <Layout1 loading={loading}>
      <StreamersList
        ListHeaderComponent={() => (
          <>
            <BlankSpace height={8} />
            <TextT1 TextSize="XXLarge" fontWeigth="Black">
              PATROCINADORES
            </TextT1>
            <BlankSpace height={8} />
            <SponsorsList
              data={data?.partners}
              ItemSeparatorComponent={() => <BlankSpace width={16} />}
              renderItem={({ item }) => (
                <SponsorCard
                  onPress={() =>
                    props.navigation.navigate('partnerDetail', {
                      partners_id: item.partners_id,
                    })
                  }
                  name={item.name}
                  image_url={item.logo_url}
                />
              )}
            />
            <BlankSpace height={24} />
            <TextT1 TextSize="XXLarge" fontWeigth="Black">
              STREAMERS
            </TextT1>
            <BlankSpace height={8} />
          </>
        )}
        numColumns={3}
        data={data?.streamers}
        ItemSeparatorComponent={() => <BlankSpace height={16} />}
        renderItem={({ item }) => (
          <StreamerCard
            onPress={() =>
              props.navigation.navigate('partnerDetail', {
                streamers_id: item.streamers_id,
              })
            }
            name={item.full_name}
            nickname={item.nick_name}
            photo={item.photo_url || ''}
          />
        )}
      />
    </Layout1>
  );
}

const SponsorsList = styled.FlatList.attrs({ horizontal: true })`
  width: 100%;
  height: 180px;
  padding: 0 16px;
` as unknown as typeof FlatList;
const StreamersList = styled.FlatList`
  flex: 1;
  width: 100%;
  margin-top: 4px;
` as unknown as typeof FlatList;

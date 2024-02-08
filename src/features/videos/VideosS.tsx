import React from 'react';
import styled from 'styled-components/native';
import { BlankSpace, Layout1 } from '../../common/components/Layout';
import { FlatList } from 'react-native';
import { TextT1 } from '../../common/components/Text';
import VideoCard from './components/VideoCard';
import useVideosS from './useVideosS';
import RightArrowIcon from '../../assets/icons/rightArrow.svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { VideosStackParamList } from '../../navigation/VideosNavigator';

type ScreenProps = NativeStackScreenProps<VideosStackParamList, 'videos'>;

export default function VideosS(props: ScreenProps) {
  const { data, loading, isRefreshing, refetch } = useVideosS();

  return (
    <Layout1 loading={loading && !isRefreshing}>
      <VideosList
        data={data}
        refreshing={isRefreshing}
        onRefresh={refetch}
        keyExtractor={item => item.videos_cagetories_id}
        ListFooterComponent={() => <BlankSpace height={90} />}
        renderItem={({ item }) => (
          <CategryContainer key={item.videos_cagetories_id}>
            <HeaderContainer>
              <TextT1 textColor="White" fontWeigth="Black" TextSize="Large">
                {item.name?.toUpperCase()}
              </TextT1>
              <BlankSpace width={10} />
              <RightArrowIcon />
            </HeaderContainer>
            <Category
              key={item.videos_cagetories_id}
              data={item.video_categories_videos}
              ListHeaderComponent={() => <BlankSpace width={10} />}
              ItemSeparatorComponent={() => <BlankSpace width={10} />}
              renderItem={({ item }) => (
                <VideoCard
                  onPress={() =>
                    props.navigation.navigate('videoDetail', {
                      videos_id: item.video.videos_id,
                    })
                  }
                  title={item.video.title}
                  videos_id={item.video.videos_id}
                  despcription={item.video.description}
                  thumbnail_url={item.video.thumbnail_url}
                />
              )}
            />
          </CategryContainer>
        )}
      />
    </Layout1>
  );
}

const VideosList = styled.FlatList`
  width: 100%;
  height: 100%;
` as unknown as typeof FlatList;

const CategryContainer = styled.View`
  width: 100%;
  height: 220px;
`;

const Category = styled.FlatList.attrs({ horizontal: true })`
  width: 100%;
  height: 100%;
` as unknown as typeof FlatList;

const HeaderContainer = styled.View`
  width: 100%;
  padding: 10px;
  flex-direction: row;
  align-items: center;
`;

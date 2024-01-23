import React from 'react';
import styled from 'styled-components/native';
import { Background, BlankSpace } from '../../common/components/Layout';
import Header1 from '../../common/components/headers/Header1';
import { FlatList, Text, View } from 'react-native';
import { TextT1 } from '../../common/components/Text';
import VideoCard from './components/VideoCard';
import useVideosS from './useVideosS';
import RightArrowIcon from '../../assets/icons/rightArrow.svg';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { VideosStackParamList } from '../../navigation/VideosNavigator';

type VideosSProps = NativeStackScreenProps<VideosStackParamList, 'videos'>;

export default function VideosS(props: VideosSProps) {
  const { data, loading } = useVideosS();

  return (
    <Container>
      <Background />
      <Header1 title="VIDEOS" />
      <ScrollView>
        {data?.map(category => (
          <CategryContainer key={category.videos_cagetories_id}>
            <HeaderContainer>
              <TextT1 textColor="White" fontWeigth="Black" TextSize="Large">
                {category.name?.toUpperCase()}
              </TextT1>
              <BlankSpace width={10} />
              <RightArrowIcon />
            </HeaderContainer>
            <Category
              key={category.videos_cagetories_id}
              data={category.video_categories_videos}
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
        ))}
        <BlankSpace height={100} />
      </ScrollView>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #000;
`;
const ScrollView = styled.ScrollView`
  width: 100%;
  height: 100%;
`;
const CategryContainer = styled.View`
  width: 100%;
  height: 220px;
  margin-bottom: 12px;
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

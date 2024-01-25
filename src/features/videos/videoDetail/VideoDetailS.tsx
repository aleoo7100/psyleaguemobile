import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { VideosStackParamList } from '../../../navigation/VideosNavigator';
import { Background, BlankSpace } from '../../../common/components/Layout';
import YoutubePlayer from 'react-native-youtube-iframe';
import useVideoDetailS from './useVideoDetailS';
import { TextT1, TextT2 } from '../../../common/components/Text';
import moment from 'moment';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenProps = NativeStackScreenProps<VideosStackParamList, 'videoDetail'>;

export default function VideoDetailS(props: ScreenProps) {
  const { data, loading } = useVideoDetailS({
    videos_id: props.route.params.videos_id,
  });
  return (
    <SafeAreaView>
      <Container>
        <Background />
        <YoutubePlayer height={240} videoId={data?.youtube_id || undefined} />
        <BodyContainer>
          <TextT1
            textColor="Main"
            fontWeigth="Black"
            TextSize="XLarge"
            align="center">
            {data?.title}
          </TextT1>
          <BlankSpace height={10} />
          <TextT2
            textColor="White"
            fontWeigth="Regular"
            TextSize="Medium"
            style={{ alignSelf: 'center' }}>
            {moment(data?.created_at).format('DD/MM/YYYY')}
          </TextT2>
          <BlankSpace height={16} />
          <TextT2 textColor="White" fontWeigth="Regular" TextSize="Large">
            {data?.description}
          </TextT2>
        </BodyContainer>
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 60px;
  background-color: #000;
`;
const BodyContainer = styled.View`
  width: 100%;
  padding: 8px;
  /* align-items: center; */
`;

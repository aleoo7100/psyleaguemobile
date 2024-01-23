import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { VideosStackParamList } from '../../../navigation/VideosNavigator';
import { Background } from '../../../common/components/Layout';
// import YoutubePlayer from 'react-native-youtube-iframe';
// import useVideoDetailS from './useVideoDetailS';

type VideoDetailSProps = NativeStackScreenProps<
  VideosStackParamList,
  'videoDetail'
>;

export default function VideoDetailS(props: VideoDetailSProps) {
  // const { data, loading } = useVideoDetailS({
  //   videos_id: props.route.params.videos_id,
  // });
  return (
    <Container>
      <Background />
      {/* <YoutubePlayer height={240} videoId={data?.youtube_id} /> */}
      <Text>VideoDetailS</Text>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
  background-color: #000;
`;
const Text = styled.Text``;

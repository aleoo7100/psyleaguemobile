import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { VideosStackParamList } from '../../../navigation/VideosNavigator';
import { BlankSpace, Layout1 } from '../../../common/components/Layout';
import YoutubePlayer from 'react-native-youtube-iframe';
import useVideoDetailS from './useVideoDetailS';
import { TextT1, TextT2 } from '../../../common/components/Text';
import moment from 'moment';
import { Dimensions } from 'react-native';

type ScreenProps = NativeStackScreenProps<VideosStackParamList, 'videoDetail'>;

export default function VideoDetailS(props: ScreenProps) {
  const { data, loading } = useVideoDetailS({
    videos_id: props.route.params.videos_id,
  });
  const totalWidth = Dimensions.get('window').width;

  return (
    <Layout1 loading={loading}>
      <BodyContainer>
        <YoutubeBackground />
        <YoutubePlayer
          height={totalWidth * 0.5625}
          width={totalWidth}
          videoId={data?.youtube_id || undefined}
          contentScale={1}
        />
        <BodySubContainer>
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
          <TextT2
            textColor="White"
            fontWeigth="Regular"
            TextSize="Large"
            align="center">
            {data?.description}
          </TextT2>
        </BodySubContainer>
      </BodyContainer>
    </Layout1>
  );
}

const BodyContainer = styled.View`
  width: 100%;
`;
const BodySubContainer = styled.View`
  width: 100%;
  padding: 0 16px;
  padding-top: 8px;
`;
const YoutubeBackground = styled.View`
  width: 100%;
  aspect-ratio: 1.78;
  background-color: #555;
  position: absolute;
`;

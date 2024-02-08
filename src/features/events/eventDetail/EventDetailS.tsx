import React from 'react';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EventsStackParamList } from '../../../navigation/EventsNavigator';
import LinearGradient from 'react-native-linear-gradient';
import { BlankSpace, Layout1 } from '../../../common/components/Layout';
import { TextT1, TextT2 } from '../../../common/components/Text';
import moment from 'moment';
import RegresiveTimer from '../components/RegresiveTimer';
import useEventDetailS from './useEventDetailS';
import SocialTouchableIcons from '../../../common/components/SocialTouchableIcons';
import { calculateTimeLeft } from '../../../common/helpers/calculateTimeLeft';
import CustomButton from '../../../common/components/CustomButton';
import { Linking } from 'react-native';

type ScreenProps = NativeStackScreenProps<EventsStackParamList, 'eventDetail'>;

export default function EventDetailS(props: ScreenProps) {
  const { data, loading } = useEventDetailS({
    events_id: props.route.params.events_id,
  });

  const streamer = data?.events_streamers?.[0]?.streamer;

  return (
    <Layout1 loading={loading}>
      <ScrollContainer
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 60 }}>
        <ImageContainer>
          <Image
            source={{ uri: data?.thumbnail_url || undefined }}
            defaultSource={require('../../../assets/images/defaultBackground.png')}
          />
          <BlackGradient colors={['#2220', '#0009', '#000e']} />
          <RegresiveTimerContainer date={data?.start_date} />
        </ImageContainer>
        <BodyContainer>
          <TextT1
            fontWeigth="Black"
            TextSize="XXLarge"
            textColor="Main"
            align="center">
            {data?.title?.toUpperCase()}
          </TextT1>
          <BlankSpace height={12} />
          <TextT2>{moment(data?.start_date).format('DD/MM/YYYY')}</TextT2>
          <BlankSpace height={12} />
          {data?.registration_url &&
            calculateTimeLeft(data?.start_date).isPositive && (
              <>
                <CustomButton
                  fullFill
                  onPress={() => Linking.openURL(data?.registration_url!)}>
                  <TextT1 TextSize="Medium" fontWeigth="Black">
                    INSCRÍBETE
                  </TextT1>
                </CustomButton>
                <BlankSpace height={16} />
              </>
            )}
          <TextT2 align="center" TextSize="Large">
            {data?.description}
          </TextT2>
        </BodyContainer>
        <BlankSpace height={24} />
        {streamer && (
          <StreamerContainer>
            <StreamerImage
              source={{
                uri: streamer?.photo_url || '',
              }}
            />
            <TextT2
              fontWeigth="Bold"
              TextSize="Medium"
              textColor="Main"
              align="center">
              {streamer?.nick_name}
            </TextT2>
            <TextT2 align="center" TextSize="XSmall">
              Streamer oficial
            </TextT2>
            <BlankSpace height={12} />
            <SocialTouchableIcons
              instagram_url={streamer?.instagram_url}
              twitch_url={streamer?.twitch_url}
              youtube_url={streamer?.youtube_url}
              tiktok_url={streamer?.tiktok_url}
              facebook_url={streamer?.facebook_url}
            />
          </StreamerContainer>
        )}
      </ScrollContainer>
    </Layout1>
  );
}

const ScrollContainer = styled.ScrollView`
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
`;
const ImageContainer = styled.View`
  width: 100%;
  aspect-ratio: 1.2;
`;
const Image = styled.Image`
  width: 100%;
  aspect-ratio: 1.2;
`;
const BlackGradient = styled(LinearGradient)`
  width: 100%;
  height: 60%;
  bottom: 0;
  position: absolute;
`;
const BodyContainer = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 24px;
  padding-top: 16px;
  align-items: center;
`;
const RegresiveTimerContainer = styled(RegresiveTimer)`
  position: absolute;
  top: 16px;
  right: 0px;
`;
const StreamerImage = styled.Image`
  width: 100px;
  height: 100px;
  border-radius: 75px;
`;
const StreamerContainer = styled.View`
  width: 80%;
  aspect-ratio: 1.4;
  padding: 24px;
  background-color: #1f1f1f;
  border-radius: 40px;
  align-items: center;
  justify-content: center;
`;

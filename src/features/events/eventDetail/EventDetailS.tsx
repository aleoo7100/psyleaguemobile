import React from 'react';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EventsStackParamList } from '../../../navigation/EventsNavigator';
import LinearGradient from 'react-native-linear-gradient';
import { Background, BlankSpace } from '../../../common/components/Layout';
import { TextT1, TextT2 } from '../../../common/components/Text';
import moment from 'moment';
import RegresiveTimer from '../components/RegresiveTimer';
import InstagramIcon from '../../../assets/icons/instagram.svg';
import TwitchIcon from '../../../assets/icons/twitch.svg';
import YoutubeIcon from '../../../assets/icons/youtube.svg';
import TiktokIcon from '../../../assets/icons/tiktok.svg';
import FacebookIcon from '../../../assets/icons/facebook.svg';
import useEventDetailS from './useEventDetailS';
import { Linking } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

type ScreenProps = NativeStackScreenProps<EventsStackParamList, 'eventDetail'>;

export default function EventDetailS(props: ScreenProps) {
  const { data } = useEventDetailS({ events_id: props.route.params.events_id });

  const streamer = data?.events_streamers?.[0]?.streamer;

  return (
    <SafeAreaView>
      <Container>
        <Background />
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
              <SocialMediaContainer>
                {streamer?.instagram_url && (
                  <IconContainer
                    onPress={() => {
                      Linking.openURL(streamer?.instagram_url!);
                    }}>
                    <InstagramIcon width={26} height={26} />
                  </IconContainer>
                )}
                {streamer?.twitch_url && (
                  <IconContainer
                    onPress={() => {
                      Linking.openURL(streamer?.twitch_url!);
                    }}>
                    <TwitchIcon width={26} height={26} />
                  </IconContainer>
                )}
                {streamer?.youtube_url && (
                  <IconContainer
                    onPress={() => {
                      Linking.openURL(streamer?.youtube_url!);
                    }}>
                    <YoutubeIcon width={26} height={26} />
                  </IconContainer>
                )}
                {streamer?.tiktok_url && (
                  <IconContainer
                    onPress={() => {
                      Linking.openURL(streamer?.tiktok_url!);
                    }}>
                    <TiktokIcon width={26} height={26} />
                  </IconContainer>
                )}
                {streamer?.facebook_url && (
                  <IconContainer
                    onPress={() => {
                      Linking.openURL(streamer?.facebook_url!);
                    }}>
                    <FacebookIcon width={26} height={26} />
                  </IconContainer>
                )}
              </SocialMediaContainer>
            </StreamerContainer>
          )}
        </ScrollContainer>
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 60px;
  background-color: #000;
  align-items: center;
`;
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
const SocialMediaContainer = styled.View`
  width: 80%;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const IconContainer = styled.TouchableOpacity`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
`;

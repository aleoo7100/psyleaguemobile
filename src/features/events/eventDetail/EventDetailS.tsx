import React from 'react';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { EventsStackParamList } from '../../../navigation/EventsNavigator';
import Header2 from '../../../common/components/headers/Header2';
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

type EventDetailSProps = NativeStackScreenProps<
  EventsStackParamList,
  'EventDetail'
>;

export default function EventDetailS(props: EventDetailSProps) {
  return (
    <Container>
      <Background />
      <Header2 title="evento" />
      <ScrollContainer
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 60 }}>
        <ImageContainer>
          <Image
            source={{ uri: eventobject.img }}
            defaultSource={require('../../../assets/images/defaultBackground.png')}
          />
          <BlackGradient colors={['#2220', '#0009', '#000e']} />
          <RegresiveTimerContainer date={eventobject.eventDate} />
        </ImageContainer>
        <BodyContainer>
          <TextT1
            fontWeigth="Black"
            TextSize="XXLarge"
            textColor="Main"
            align="center">
            {eventobject.name?.toUpperCase()}
          </TextT1>
          <BlankSpace height={12} />
          <TextT2>{moment(eventobject.eventDate).format('DD/MM/YYYY')}</TextT2>
          <BlankSpace height={12} />
          <TextT2 align="center" TextSize="Large">
            {eventobject.description}
          </TextT2>
        </BodyContainer>
        <BlankSpace height={24} />
        <StreamerContainer>
          <StreamerImage source={{ uri: eventobject.streamer[0]?.photo }} />
          <TextT2
            fontWeigth="Bold"
            TextSize="Medium"
            textColor="Main"
            align="center">
            {eventobject.streamer[0]?.name}
          </TextT2>
          <TextT2 align="center" TextSize="XSmall">
            Streamer oficial
          </TextT2>
          <BlankSpace height={12} />
          <SocialMediaContainer>
            <IconContainer>
              <InstagramIcon width={26} height={26} />
            </IconContainer>
            <IconContainer>
              <TwitchIcon width={26} height={26} />
            </IconContainer>
            <IconContainer>
              <YoutubeIcon width={26} height={26} />
            </IconContainer>
            <IconContainer>
              <TiktokIcon width={26} height={26} />
            </IconContainer>
            <IconContainer>
              <FacebookIcon width={26} height={26} />
            </IconContainer>
          </SocialMediaContainer>
        </StreamerContainer>
      </ScrollContainer>
    </Container>
  );
}

const Container = styled.SafeAreaView`
  width: 100%;
  height: 100%;
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

const eventobject = {
  id: '1',
  name: 'Fortnite: Batalla por la Victoria',
  description:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec auctor, nisl eget ultricies aliquam, nisl nunc ultricies nunc, vitae aliquam nisl nunc eu nunc. Donec auctor, nisl eget ultricies aliquam, nisl nunc ultricies nunc.',
  eventDate: '2024-02-15T20:00:00.000Z',
  img: 'https://firebasestorage.googleapis.com/v0/b/psysicleague.appspot.com/o/Mesa%20de%20trabajo%2019.png?alt=media&token=df09dac1-2943-4ed5-82c6-99d23d9067fe',
  streamer: [
    {
      name: 'Lian Occoner',
      photo:
        'https://firebasestorage.googleapis.com/v0/b/psysicleague.appspot.com/o/Mesa%20de%20trabajo%2012.png?alt=media&token=4ac6785f-a09a-4381-90b4-ad7aa3576e35',
      instagramUrl: 'https://www.instagram.com/lianocconer/',
      twitchUrl: 'https://www.twitch.tv/lianocconer',
      youtubeUrl: 'https://www.youtube.com/channel/UC0Yf4y1zX4A5l2Zv0q2jK6A',
      tiktokUrl: 'https://www.tiktok.com/@lianocconer?lang=es',
      facebookUrl: 'https://www.facebook.com/lianocconer',
    },
  ],
};

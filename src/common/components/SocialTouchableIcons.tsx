import styled from 'styled-components/native';
import InstagramIcon from '../../assets/icons/instagram.svg';
import TwitchIcon from '../../assets/icons/twitch.svg';
import YoutubeIcon from '../../assets/icons/youtube.svg';
import TiktokIcon from '../../assets/icons/tiktok.svg';
import FacebookIcon from '../../assets/icons/facebook.svg';
import InternetIcon from '../../assets/icons/internet.svg';
import { Linking } from 'react-native';

interface SocialTouchableIconsProps {
  instagram_url?: string | null;
  twitch_url?: string | null;
  youtube_url?: string | null;
  tiktok_url?: string | null;
  facebook_url?: string | null;
  website_url?: string | null;
}

export default function SocialTouchableIcons(props: SocialTouchableIconsProps) {
  console.log('props', props);
  return (
    <SocialMediaContainer>
      {props?.instagram_url && (
        <IconContainer
          onPress={() => {
            Linking.openURL(props?.instagram_url!);
          }}>
          <InstagramIcon width={26} height={26} />
        </IconContainer>
      )}
      {props?.twitch_url && (
        <IconContainer
          onPress={() => {
            Linking.openURL(props?.twitch_url!);
          }}>
          <TwitchIcon width={26} height={26} />
        </IconContainer>
      )}
      {props?.youtube_url && (
        <IconContainer
          onPress={() => {
            Linking.openURL(props?.youtube_url!);
          }}>
          <YoutubeIcon width={26} height={26} />
        </IconContainer>
      )}
      {props?.tiktok_url && (
        <IconContainer
          onPress={() => {
            Linking.openURL(props?.tiktok_url!);
          }}>
          <TiktokIcon width={26} height={26} />
        </IconContainer>
      )}
      {props?.facebook_url && (
        <IconContainer
          onPress={() => {
            Linking.openURL(props?.facebook_url!);
          }}>
          <FacebookIcon width={26} height={26} />
        </IconContainer>
      )}
      {props?.website_url && (
        <IconContainer
          onPress={() => {
            Linking.openURL(props?.website_url!);
          }}>
          <InternetIcon width={26} height={26} />
        </IconContainer>
      )}
    </SocialMediaContainer>
  );
}

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

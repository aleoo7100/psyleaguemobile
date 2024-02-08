import { PartnersStackParamList } from '../../../navigation/PartnersNavigator';
import React from 'react';
import styled from 'styled-components/native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import LinearGradient from 'react-native-linear-gradient';
import { BlankSpace, Layout1 } from '../../../common/components/Layout';
import { TextT1, TextT2 } from '../../../common/components/Text';
import SocialTouchableIcons from '../../../common/components/SocialTouchableIcons';
import usePartnerDetailS from './usePartnerDetailS';

type ScreenProps = NativeStackScreenProps<
  PartnersStackParamList,
  'partnerDetail'
>;

export default function PartnerDetailS(props: ScreenProps) {
  const { data, loading } = usePartnerDetailS({ ...props.route.params });

  return (
    <Layout1 loading={loading}>
      <ScrollContainer>
        <ImageContainer>
          <Image
            source={{ uri: data?.imageUrl || undefined }}
            defaultSource={require('../../../assets/images/defaultBackground.png')}
          />
          <BlackGradient colors={['#2220', '#0009', '#000e']} />
        </ImageContainer>
        <BodyContainer>
          <TextT1
            fontWeigth="Black"
            TextSize="XXLarge"
            textColor="Main"
            align="center">
            {data?.name?.toUpperCase()}
          </TextT1>
          <BlankSpace height={12} />
          <TextT2 align="center" TextSize="Large">
            {data?.description}
          </TextT2>
          <BlankSpace height={24} />
          <SocialButtonsContainer>
            <SocialTouchableIcons
              instagram_url={data?.instagramUrl}
              twitch_url={data?.twitchUrl}
              youtube_url={data?.youtubeUrl}
              tiktok_url={data?.tiktokUrl}
              facebook_url={data?.facebookUrl}
              website_url={data?.websiteUrl}
            />
          </SocialButtonsContainer>
          <BlankSpace height={60} />
        </BodyContainer>
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
const SocialButtonsContainer = styled.View`
  width: 80%;
  padding: 6px 24px;
  background-color: #1f1f1f;
  border-radius: 16px;
  align-items: center;
  justify-content: center;
`;

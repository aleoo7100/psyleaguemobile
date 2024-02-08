import { NativeStackScreenProps } from '@react-navigation/native-stack';
import React from 'react';
import styled from 'styled-components/native';
import { RankingStackParamList } from '../../../navigation/RankingNavigator';
import { BlankSpace, Layout1 } from '../../../common/components/Layout';
import useRankingDetail from './useRankingDetailS';
import LinearGradient from 'react-native-linear-gradient';
import { TextT1, TextT2 } from '../../../common/components/Text';
import EventSimpleCard from '../../../common/components/EventSimpleCard';

type ScreenProps = NativeStackScreenProps<
  RankingStackParamList,
  'rankingdDetail'
>;

export default function RankingDetailS(props: ScreenProps) {
  const { data, loading } = useRankingDetail({
    users_id: props.route.params.users_id,
  });

  return (
    <Layout1 loading={loading}>
      <ScrollContainer
        contentContainerStyle={{ alignItems: 'center', paddingBottom: 60 }}>
        <ImageContainer>
          <Image
            source={{ uri: data?.avatar_url || undefined }}
            defaultSource={require('../../../assets/images/defaultBackground.png')}
          />
          <BlackGradient colors={['#2220', '#000b', '#000000fa']} />
          <PointsContainer1>
            <PointSubContainer>
              <PointSubContainer />
            </PointSubContainer>
            <PointsTextContainer>
              <TextT1 TextSize={'Big'} fontWeigth={'Black'}>
                {props.route.params.ranking}
              </TextT1>
              <TextT2 TextSize="XSmall">Ranking</TextT2>
            </PointsTextContainer>
          </PointsContainer1>
          <PointsContainer2>
            <PointSubContainer>
              <PointSubContainer />
            </PointSubContainer>
            <PointsTextContainer>
              <TextT1 TextSize={'Big'} fontWeigth={'Black'}>
                {data?.ranking}
              </TextT1>
              <TextT2 TextSize="XSmall">Power ranking</TextT2>
            </PointsTextContainer>
          </PointsContainer2>
        </ImageContainer>
        <BodyContainer>
          <TextT1
            fontWeigth="Black"
            TextSize="XXLarge"
            textColor="Main"
            align="center">
            {data?.full_name?.toUpperCase()}
          </TextT1>
          <BlankSpace height={12} />
          <TextT2>{data?.nick_name}</TextT2>
          <BlankSpace height={12} />
          {(data?.events?.length || 0) > 0 && (
            <>
              <TextT1 fontWeigth="Bold" TextSize="XLarge">
                VICTORIAS
              </TextT1>
              <BlankSpace height={8} />
              {data?.events?.map((event, index) => (
                <EventSimpleCard
                  key={index}
                  title={event.title}
                  date={event.date}
                  points={event.points}
                />
              ))}
            </>
          )}
        </BodyContainer>
        <BlankSpace height={24} />
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
  aspect-ratio: 0.95;
`;
const Image = styled.Image`
  width: 100%;
  aspect-ratio: 0.95;
`;
const BlackGradient = styled(LinearGradient)`
  width: 100%;
  height: 70%;
  bottom: 0;
  position: absolute;
`;
const BodyContainer = styled.View`
  width: 100%;
  flex: 1;
  padding: 0 24px;
  align-items: center;
`;
const PointsContainer1 = styled.View`
  width: 150px;
  aspect-ratio: 1;
  padding: 14px;
  background-color: #fff2;
  border-radius: 300px;
  position: absolute;
  bottom: 20px;
  left: 5%;
  justify-content: center;
  align-items: center;
`;
const PointsContainer2 = styled(PointsContainer1)`
  left: unset;
  right: 5%;
`;
const PointSubContainer = styled.View`
  width: 100%;
  padding: 16px;
  aspect-ratio: 1;
  border-radius: 300px;
  background-color: #fff2;
  justify-content: center;
  align-items: center;
`;
const PointsTextContainer = styled.View`
  width: 100%;
  position: absolute;
  justify-content: center;
  align-items: center;
`;

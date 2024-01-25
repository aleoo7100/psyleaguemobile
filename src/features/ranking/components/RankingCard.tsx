import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { TextT1, TextT2 } from '../../../common/components/Text';
import { BlankSpace } from '../../../common/components/Layout';

interface RankingCardProps {
  position: number;
  name: string;
  points: number;
  nick_name: string;
  avatar_url: string;
  onPress: () => void;
}

export default function RankingCard(props: RankingCardProps) {
  const getRankingColor = (position: number) => {
    switch (position) {
      case 1:
        return ['#ffaf2e', '#ffc232', '#ffd57c'];
      case 2:
        return ['#e7e7e7', '#b8b8b8', '#ffffff'];
      case 3:
        return ['#ffa87c', '#ff935d', '#ff8548'];
      default:
        return ['#ff0f27', '#ff5061'];
    }
  };

  return (
    <Container activeOpacity={1} onPress={props.onPress}>
      <BackgroundGradient
        colors={getRankingColor(props.position)}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}>
        <Background
          source={require('../../../assets/images/rankingCardBackground.png')}
        />
        <BodyContainer>
          <CircleEffect3 />
          <CircleEffect1>
            <CircleEffect2>
              <CircleEffect2 />
            </CircleEffect2>
          </CircleEffect1>
          <PositionContainer>
            <TextT1 TextSize="Big" fontWeigth="Black">
              {props.position}
            </TextT1>
            <TextT2 TextSize="XXSmall">Ranking</TextT2>
          </PositionContainer>
          <ProfileContainer>
            <ProfileImage
              source={{ uri: props.avatar_url }}
              defaultSource={require('../../../assets/images/defaultBackground.png')}
            />
            <BlankSpace width={8} />
            <TextProfileContainer>
              <TextT2
                TextSize="Small"
                fontWeigth="Bold"
                numberOfLines={1}
                style={{ width: '100%' }}>
                {props.name}
              </TextT2>
              <TextT2>{props.nick_name}</TextT2>
            </TextProfileContainer>
          </ProfileContainer>
          <PointsContainer>
            <TextT1 TextSize="XXLarge" fontWeigth="Black">
              {props.points}
            </TextT1>
            <TextT2 TextSize="XXSmall">Power ranking</TextT2>
          </PointsContainer>
        </BodyContainer>
      </BackgroundGradient>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: 100%;
  aspect-ratio: 4;
  background-color: #fff;
  border-radius: 13px;
  overflow: hidden;
`;
const BackgroundGradient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  border-radius: 13px;
`;
const BodyContainer = styled.View`
  width: 100%;
  height: 100%;
  flex-direction: row;
`;
const Background = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 13px;
`;
const PositionContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 20%;
`;
const ProfileContainer = styled.View`
  flex: 1;
  width: 55%;
  flex-direction: row;
  align-items: center;
`;
const PointsContainer = styled.View`
  justify-content: center;
  align-items: center;
  width: 25%;
`;
const ProfileImage = styled.Image`
  height: 80%;
  aspect-ratio: 1;
  border-radius: 80px;
`;
const TextProfileContainer = styled.View`
  flex: 1;
  justify-content: center;
`;
const CircleEffect1 = styled.View`
  top: -30%;
  right: -12%;
  position: absolute;
  height: 160%;
  aspect-ratio: 1;
  border-radius: 200px;
  background-color: #ffffff18;
`;
const CircleEffect2 = styled.View`
  width: 100%;
  aspect-ratio: 1;
  border-radius: 200px;
  background-color: #ffffff18;
  position: absolute;
  right: -12%;
`;
const CircleEffect3 = styled.View`
  top: -30%;
  left: -22%;
  position: absolute;
  height: 160%;
  aspect-ratio: 1;
  border-radius: 200px;
  background-color: #ffffff18;
`;

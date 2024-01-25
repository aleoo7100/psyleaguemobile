import React from 'react';
import styled from 'styled-components/native';
import { TextT1, TextT2 } from '../../../common/components/Text';
import LinearGradient from 'react-native-linear-gradient';
import { BlankSpace } from '../../../common/components/Layout';
import RightArrowIcon from '../../../assets/icons/rightArrow.svg';
import CustomButton from '../../../common/components/CustomButton';
import moment from 'moment';

interface NewCardProps {
  title: string;
  image: string;
  date: string;
  shortDescription: string;
  onPress: () => void;
}

export default function NewCard(props: NewCardProps) {
  return (
    <Container activeOpacity={1} onPress={props.onPress}>
      <BackgroundContainer>
        <Background
          source={{ uri: props.image }}
          defaultSource={require('../../../assets/images/defaultBackground.png')}
        />
        <ImageGradient colors={['#2220', '#0009', '#000f']}>
          <TitleText numberOfLines={2}>{props.title?.toUpperCase()}</TitleText>
        </ImageGradient>
      </BackgroundContainer>
      <TextContainer>
        <DateText>{moment(props.date).format('DD/MM/YYYY')}</DateText>
        <DescriptionText numberOfLines={3}>
          {props.shortDescription}
        </DescriptionText>
      </TextContainer>
      <CustomButton
        title="Ver más"
        rightIcon={<RightArrowIcon />}
        onPress={props.onPress}
      />
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: 100%;
  background-color: #fff;
  border-radius: 26px;
  align-items: center;
  padding-bottom: 12px;
`;
const BackgroundContainer = styled.View`
  width: 100%;
  aspect-ratio: 2;
  border-radius: 26px;
  justify-content: flex-end;
  margin-bottom: 6px;
`;
const Background = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 26px;
`;
const ImageGradient = styled(LinearGradient)`
  width: 100%;
  height: 50%;
  border-bottom-left-radius: 32px;
  border-bottom-right-radius: 32px;
  justify-content: flex-end;
  padding: 8px 28px;
`;
const TitleText = styled(TextT1).attrs({
  fontWeigth: 'Black',
  textColor: 'Main',
  TextSize: 'Large',
})`
  width: 100%;
  margin-bottom: 8px;
`;
const TextContainer = styled.View`
  width: 100%;
  padding: 8px 28px;
  align-items: center;
`;
const DateText = styled(TextT2)`
  font-size: 12px;
  color: #8c8b8b;
  margin-bottom: 6px;
`;
const DescriptionText = styled(TextT2)`
  width: 100%;
  color: #131313;
  text-align: justify;
`;

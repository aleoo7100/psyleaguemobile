import React from 'react';
import styled from 'styled-components/native';
import RightArrowIcon from '../../../assets/icons/rightArrow.svg';
import LinearGradient from 'react-native-linear-gradient';
import { BlankSpace } from '../../../common/components/Layout';
import { TextT1 } from '../../../common/components/Text';
import moment from 'moment';
import CustomButton from '../../../common/components/CustomButton';
import styleEffects from '../../../common/helpers/styleEffects';
import RegresiveTimer from './RegresiveTimer';

interface EventCardProps {
  name: string;
  image: string;
  eventDate: string;
  onPress: () => void;
}

export default function EventCard(props: EventCardProps) {
  return (
    <Container activeOpacity={1} onPress={props.onPress}>
      <Background
        source={{ uri: props.image }}
        defaultSource={require('../../../assets/images/defaultBackground.png')}
      />
      <BlackGradient colors={['#2220', '#0009', '#000e']} />
      <ContainerTop>
        <CalendarContainer style={styleEffects.bright}>
          <CalendarDay>{moment(props.eventDate).format('DD')}</CalendarDay>
          <TextT1 fontWeigth={'Bold'} TextSize={'Medium'} textColor={'Main'}>
            {moment(props.eventDate).format('MMM')}
          </TextT1>
        </CalendarContainer>
        <RegresiveTimer date={props.eventDate} />
      </ContainerTop>
      <ContainerBottom>
        <TextT1
          TextSize="Large"
          fontWeigth="Black"
          textColor="Main"
          numberOfLines={2}>
          {props.name?.toUpperCase()}
        </TextT1>
        <BlankSpace height={6} />
        <CustomButton
          title="Ver más"
          rightIcon={<RightArrowIcon />}
          onPress={props.onPress}
        />
      </ContainerBottom>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  width: 100%;
  aspect-ratio: 1.2;
  background-color: #fff;
  border-radius: 26px;
  justify-content: space-between;
`;
const Background = styled.Image`
  width: 100%;
  height: 100%;
  position: absolute;
  border-radius: 26px;
`;
const ContainerTop = styled.View`
  width: 100%;
  padding: 24px;
  padding-right: 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const ContainerBottom = styled.View`
  width: 100%;
  padding: 24px;
  align-items: flex-start;
  justify-content: flex-end;
`;
const CalendarContainer = styled.View`
  width: 64px;
  height: 64px;
  border-radius: 15px;
  background-color: #fff;
  justify-content: center;
  align-items: center;
`;
const CalendarDay = styled(TextT1).attrs({
  fontWeigth: 'Black',
  TextSize: 'Big',
  textColor: 'Main',
})`
  margin-bottom: -10px;
`;

const BlackGradient = styled(LinearGradient)`
  width: 100%;
  height: 60%;
  bottom: 0;
  position: absolute;
  border-bottom-left-radius: 26px;
  border-bottom-right-radius: 26px;
`;

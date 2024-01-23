import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components/native';
import { TextT1 } from '../../../common/components/Text';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import styleEffects from '../../../common/helpers/styleEffects';
import { calculateTimeLeft } from '../../../common/helpers/calculateTimeLeft';

interface RegresiveTimerProps {
  date?: string;
  style?: StyleProp<ViewStyle>;
}
export default function RegresiveTimer(props: RegresiveTimerProps) {
  const [timeLeft, setTimeLeft] = useState([0, 0, 0]);
  const [ispositiveTime, setIspositiveTime] = useState(false);
  const timer = useRef<any>(null);

  useEffect(() => {
    const timeLeftResult = calculateTimeLeft(props.date);
    setTimeLeft(timeLeftResult.timeLeft);
    setIspositiveTime(timeLeftResult.isPositive);
    timer.current = setInterval(() => {
      const timeLeftResult = calculateTimeLeft(props.date);
      setTimeLeft(timeLeftResult.timeLeft);
      setIspositiveTime(timeLeftResult.isPositive);
    }, 5000);
    return () => {
      clearInterval(timer.current);
    };
  }, [props.date]);

  if (!ispositiveTime) {
    return null;
  }

  return (
    <Container style={[styleEffects.bright, props.style]}>
      <TimeContainer>
        <TextT1 fontWeigth={'Bold'} TextSize={'Large'}>
          {timeLeft[0]}
        </TextT1>
        <TextT1 fontWeigth={'Bold'} TextSize={'XSmall'}>
          DÍAS
        </TextT1>
      </TimeContainer>
      <TimeContainer>
        <TextT1 fontWeigth={'Bold'} TextSize={'Large'}>
          {timeLeft[1]}
        </TextT1>
        <TextT1 fontWeigth={'Bold'} TextSize={'XSmall'}>
          Horas
        </TextT1>
      </TimeContainer>
      <TimeContainer>
        <TextT1 fontWeigth={'Bold'} TextSize={'Large'}>
          {timeLeft[2]}
        </TextT1>
        <TextT1 fontWeigth={'Bold'} TextSize={'XSmall'}>
          Minutos
        </TextT1>
      </TimeContainer>
    </Container>
  );
}

const Container = styled.View`
  height: 36px;
  padding: 1px 18px;
  align-items: center;
  flex-direction: row;
  border-top-left-radius: 26px;
  border-bottom-left-radius: 4px;
  background-color: #ed283c;
`;
const TimeContainer = styled.View`
  width: 46px;
  align-items: center;
`;

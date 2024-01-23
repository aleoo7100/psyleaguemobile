import React, { useRef, useEffect } from 'react';
import styled from 'styled-components/native';
import LoadingImg from '../../assets/icons/loading.svg';
import { Animated, Easing } from 'react-native';

export default function Loading() {
  const spinValue = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const tt = Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true, // Para mejorar el rendimiento
      }),
    );
    tt.start();
    return () => tt.stop();
  }, [spinValue]);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <Container>
      <Animated.View
        style={{
          transform: [{ rotate: spin }],
        }}>
        <LoadingImg width={180} height={180} />
      </Animated.View>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin-bottom: 200px;
`;

import React, { useEffect } from 'react';
import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import styled from 'styled-components/native';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
import TabIconBorder from '../../assets/icons/tabIconBorder.svg';
import { TextT2 } from '../../common/components/Text';

interface CustomTabBarButtonI extends BottomTabBarButtonProps {
  icon: React.ReactNode;
  title: string;
}

export default function CustomTabBarButton(props: CustomTabBarButtonI) {
  const translateY = useSharedValue(0);

  useEffect(() => {
    if (props.accessibilityState?.selected) {
      translateY.value = withTiming(-9);
    } else {
      translateY.value = withTiming(0);
    }
  }, [props.accessibilityState?.selected]);

  return (
    <Container>
      <AnimatedContainer
        style={[
          useAnimatedStyle(() => ({
            transform: [{ translateY: translateY.value }],
          })),
        ]}>
        <TouchableOpacity onPress={props.onPress} activeOpacity={1}>
          <TabIconBorder height={10} width={57} />
          <IconContainer>{props.icon}</IconContainer>
          <Text>{props.title}</Text>
        </TouchableOpacity>
      </AnimatedContainer>
    </Container>
  );
}

const Container = styled.View`
  flex: 1;
  height: 70px;
`;
const TouchableOpacity = styled.TouchableOpacity`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
`;
const Text = styled(TextT2)`
  font-size: 11px;
`;
const IconContainer = styled.View`
  width: 24px;
  height: 24px;
  margin-bottom: 6px;
`;
const AnimatedContainer = styled(Animated.View)`
  flex: 1;
`;

import React, { Children } from 'react';
import styled from 'styled-components/native';
import { TextT1 } from './Text';
import { BlankSpace } from './Layout';
import LinearGradient from 'react-native-linear-gradient';
import { TouchableOpacityProps } from 'react-native';

interface CustomButtonProps extends TouchableOpacityProps {
  title?: string;
  rightIcon?: React.ReactNode;
  children?: React.ReactNode;
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <Container {...props}>
      <ButtonGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#ED283C', '#AB0F1F']}>
        {props.children ? (
          props.children
        ) : (
          <>
            <TextT1 TextSize="Small">{props.title}</TextT1>
            {props.rightIcon && (
              <>
                <BlankSpace width={8} />
                {props.rightIcon}
              </>
            )}
          </>
        )}
      </ButtonGradient>
    </Container>
  );
}

const Container = styled.TouchableOpacity`
  flex-direction: row;
  border-radius: 20px;
`;
const ButtonGradient = styled(LinearGradient)`
  height: 100%;
  border-radius: 20px;
  padding: 4px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  align-items: center;
`;

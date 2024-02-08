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
  fullFill?: boolean;
}

export default function CustomButton(props: CustomButtonProps) {
  return (
    <Container {...props} activeOpacity={1}>
      <ButtonGradient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        fullFill={props.fullFill}
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

const Container = styled.TouchableOpacity<{ fullFill?: boolean }>`
  flex-direction: row;
  border-radius: 50px;
  ${({ fullFill }) => fullFill && 'width: 100%'};
`;
const ButtonGradient = styled(LinearGradient)<{ fullFill?: boolean }>`
  height: 100%;
  border-radius: 20px;
  padding: 4px 20px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  ${({ fullFill }) => fullFill && 'flex:1;'};
  ${({ fullFill }) => fullFill && 'padding: 12px 0px;'};
`;

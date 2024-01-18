import styled from 'styled-components/native';

export const Background = styled.Image.attrs({
  source: require('../../assets/images/background.jpeg'),
})`
  width: 100%;
  height: 100%;
  position: absolute;
  opacity: 0.4;
`;

export const BlankSpace = styled.View<{ width?: number; height?: number }>`
  width: ${props => (props.width ? `${props.width}px` : '100%')};
  height: ${props => (props.height ? `${props.height}px` : '100%')};
`;

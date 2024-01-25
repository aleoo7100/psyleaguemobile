import { Platform } from 'react-native';
import { css } from 'styled-components';
import styled from 'styled-components/native';

const GeneralText = styled.Text<{
  align?: 'left' | 'center' | 'right';
  fontWeigth?: 'Regular' | 'Bold' | 'Black';
  textColor?: 'Main' | 'White' | 'Black';
  TextSize?:
    | 'XXSmall'
    | 'XSmall'
    | 'Small'
    | 'Medium'
    | 'Large'
    | 'XLarge'
    | 'XXLarge'
    | 'Big';
}>`
  text-align: ${props => props.align || 'left'};
  color: ${props => {
    if (props.textColor === 'Main') return '#ED283C';
    else if (props.textColor === 'White') return '#fff';
    else if (props.textColor === 'Black') return '#000';
    else return '#fff';
  }};
  font-size: ${props => {
    if (props.TextSize === 'XXSmall') return '8px';
    else if (props.TextSize === 'XSmall') return '10px';
    else if (props.TextSize === 'Small') return '12px';
    else if (props.TextSize === 'Medium') return '14px';
    else if (props.TextSize === 'Large') return '16px';
    else if (props.TextSize === 'XLarge') return '20px';
    else if (props.TextSize === 'XXLarge') return '24px';
    else if (props.TextSize === 'Big') return '30px';
    else return '14px';
  }};
`;

export const TextT1 = styled(GeneralText)`
  ${props => {
    if (Platform.OS === 'android') {
      return css`
        font-family: ${props.fontWeigth === 'Black'
          ? 'Modernhead-Black'
          : props.fontWeigth === 'Bold'
          ? 'Modernhead-Bold'
          : 'Modernhead-Regular'};
      `;
    } else {
      return css`
        font-family: 'Modernhead';
        font-weight: ${props.fontWeigth === 'Black'
          ? '900'
          : props.fontWeigth === 'Bold'
          ? '700'
          : '400'};
      `;
    }
  }}
`;
export const TextT2 = styled(GeneralText)<{}>`
  ${props => {
    if (Platform.OS === 'android') {
      return css`
        font-family: ${props.fontWeigth === 'Black'
          ? 'Poppins-Black'
          : props.fontWeigth === 'Bold'
          ? 'Poppins-Bold'
          : 'Poppins-Regular'};
      `;
    } else {
      return css`
        font-family: 'Poppins';
        font-weight: ${props.fontWeigth === 'Black'
          ? '900'
          : props.fontWeigth === 'Bold'
          ? '700'
          : '400'};
      `;
    }
  }}
`;

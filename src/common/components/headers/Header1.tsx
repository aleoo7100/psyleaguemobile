import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { TextT1 } from '../Text';

interface Header1Props {
  title: string;
}

export default function Header1({ title }: Header1Props) {
  return (
    <Container>
      <HeaderGrandient
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0 }}
        colors={['#AB0F1F', '#ED283C']}>
        <TextT1 fontWeigth="Black" TextSize="Big">
          {title}
        </TextT1>
      </HeaderGrandient>
    </Container>
  );
}

const Container = styled.View`
  width: 100%;
  height: 60px;
  background-color: #f00;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  opacity: 1;
`;
const HeaderGrandient = styled(LinearGradient)`
  width: 100%;
  height: 100%;
  opacity: 1;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
  justify-content: center;
  align-items: center;
`;

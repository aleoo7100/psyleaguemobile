import LinearGradient from 'react-native-linear-gradient';
import styled from 'styled-components/native';
import { TextT1 } from '../Text';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Header1Props {
  title: string;
}

export default function Header1({ title }: Header1Props) {
  return (
    <SafeAreaView>
      <Container>
        <BlackHeader />
        <HeaderGrandient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#AB0F1F', '#ED283C']}>
          <TextT1 fontWeigth="Black" TextSize="Big">
            {title}
          </TextT1>
        </HeaderGrandient>
      </Container>
    </SafeAreaView>
  );
}

const Container = styled.View`
  width: 100%;
  height: 60px;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
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
const BlackHeader = styled.View`
  width: 100%;
  height: 100px;
  position: absolute;
  background-color: #000;
  top: -100px;
`;

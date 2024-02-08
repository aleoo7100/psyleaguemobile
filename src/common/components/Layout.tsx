import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import Loading from './Loading';

interface Layout1Props {
  children: React.ReactNode;
  loading?: boolean;
}
export function Layout1({ children, loading }: Layout1Props) {
  return (
    <SafeAreaView>
      <Layout1Container>
        <Background />
        {loading ? <Loading /> : children}
      </Layout1Container>
    </SafeAreaView>
  );
}

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
const Layout1Container = styled.View`
  width: 100%;
  height: 100%;
  padding-top: 60px;
  background-color: #000;
  align-items: center;
`;

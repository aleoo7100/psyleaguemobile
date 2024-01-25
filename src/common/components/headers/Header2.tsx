import React from 'react';
import styled from 'styled-components/native';
import GoBackIcon from '../../../assets/icons/goBack.svg';
import { TextT1 } from '../Text';
import { BlankSpace } from '../Layout';
import { useNavigation } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Header2Props {
  title: string;
}

export default function Header2({ title }: Header2Props) {
  const navigation = useNavigation();

  return (
    <SafeAreaView>
      <Header>
        <BlackHeader />
        {navigation.canGoBack() ? (
          <GoBackButton
            onPress={() => {
              navigation.goBack();
            }}>
            <GoBackIcon />
          </GoBackButton>
        ) : (
          <BlankSpace width={60} />
        )}
        <TextT1 fontWeigth="Black" TextSize="Big">
          {title?.toUpperCase()}
        </TextT1>
        <BlankSpace width={60} />
      </Header>
    </SafeAreaView>
  );
}

const Header = styled.View`
  width: 100%;
  height: 60px;
  padding: 10px 0;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
const GoBackButton = styled.TouchableOpacity`
  width: 60px;
  height: 100%;
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

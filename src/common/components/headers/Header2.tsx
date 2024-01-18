import React from 'react';
import styled from 'styled-components/native';
import GoBackIcon from '../../../assets/icons/goBack.svg';
import { TextT1 } from '../Text';
import { BlankSpace } from '../Layout';
import { useNavigation } from '@react-navigation/native';

interface Header2Props {
  title: string;
}

export default function Header2({ title }: Header2Props) {
  const navigation = useNavigation();

  return (
    <Header>
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
  );
}

const Header = styled.SafeAreaView`
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

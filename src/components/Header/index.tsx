import React from 'react';
import { useNavigation, useBackButton } from '@react-navigation/native';
import { View, SafeAreaView } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import { Container, HeaderButton, HeaderRow } from './styles';

const Header: React.FC = () => {
  const navigation = useNavigation();

  const handleGoBack = () => {
    navigation.goBack();
  };

  return (
    <>
      <Container>
        <SafeAreaView />
        <HeaderRow>
          <HeaderButton onPress={handleGoBack}>
            <Icon name="arrow-back" color="#FFF" size={35} />
          </HeaderButton>
          <View style={{ flex: 4, alignItems: 'center', justifyContent: 'center' }} />
          <HeaderButton onPress={handleGoBack}>
            <Icon name="ios-menu" color="#FFF" size={35} />
          </HeaderButton>
        </HeaderRow>
      </Container>
    </>
  );
};

export default Header;

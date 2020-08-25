import React from 'react';
import { View, Text as RNText } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, HeaderText, BodyText, Body, BodyRow } from './styles';
import IndicadorFases from '../IndicadorFases';

const Card: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container
      onPress={() => {
        navigation.navigate('PropostaDetalhe');
      }}
    >
      <Header>
        <HeaderText>Guilherme Cordeiro</HeaderText>
      </Header>
      <Body>
        <BodyRow>
          <BodyText>Modelo X</BodyText>
          <BodyText>R$ 1.250.000,00</BodyText>
        </BodyRow>
        <BodyRow>
          <View
            style={{
              height: 30,
              width: 60,
              backgroundColor: '#EB5757',
              borderRadius: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <RNText style={{ color: '#FFF' }}>4,82</RNText>
          </View>
          <BodyText>18/08/2020</BodyText>
        </BodyRow>
        <View style={{ flex: 5 }}>
          <IndicadorFases details={false}/>
        </View>
      </Body>
    </Container>
  );
};

export default Card;

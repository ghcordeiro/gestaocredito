import React from 'react';
import { View, Text as RNText } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { Container, Header, HeaderText, BodyText, Body, BodyRow } from './styles';

const Card: React.FC = () => {
  const navigation = useNavigation();

  return (
    <Container onPress={() => {navigation.navigate('PropostaDetalhe')}}>
      <Header>
        <HeaderText>Guilherme Cordeiro</HeaderText>
      </Header>
      <Body>
        <BodyRow>
          <BodyText>Modelo X</BodyText>
          <BodyText>R$ 1.250.000,00</BodyText>
        </BodyRow>
        <BodyRow>
          <View style={{ height: 30, width: 60, backgroundColor: '#EB5757', borderRadius: 10, alignItems: 'center', justifyContent: 'center' }} >
            <RNText style={{ color: '#FFF' }}>4,82</RNText>
          </View>
          <BodyText>18/08/2020</BodyText>
        </BodyRow>
        <View style={{ flex: 5, marginTop: 8 }}>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between', paddingHorizontal: 19 }}>
            <View style={{ height: 40, width: 40, backgroundColor: '#27AE60', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }} />
            <View style={{ height: 40, width: 40, backgroundColor: '#E0E0E0', borderRadius: 50, alignItems: 'center', justifyContent: 'center', borderColor: '#717171', borderWidth: 1 }} />
            <View style={{ height: 40, width: 40, backgroundColor: '#E0E0E0', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }} />
            <View style={{ height: 40, width: 40, backgroundColor: '#E0E0E0', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }} />
            <View style={{ height: 40, width: 40, backgroundColor: '#E0E0E0', borderRadius: 50, alignItems: 'center', justifyContent: 'center' }} />
          </View>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-between' }}>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              <RNText style={{ fontSize: 12}}>Jean</RNText>
              <RNText style={{ fontSize: 12}}>18/08/2020</RNText>
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {/* <RNText style={{ fontSize: 12}}>Jean</RNText>
              <RNText style={{ fontSize: 12}}>18/08/2020</RNText> */}
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {/* <RNText style={{ fontSize: 12}}>Jean</RNText>
              <RNText style={{ fontSize: 12}}>18/08/2020</RNText> */}
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {/* <RNText style={{ fontSize: 12}}>Jean</RNText>
              <RNText style={{ fontSize: 12}}>18/08/2020</RNText> */}
            </View>
            <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
              {/* <RNText style={{ fontSize: 12}}>Jean</RNText>
              <RNText style={{ fontSize: 12}}>18/08/2020</RNText> */}
            </View>
            
          </View>
        </View>
      </Body>
    </Container>
  );
}

export default Card;
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import Header from '../../components/Header';
import Bottom from '../../components/Bottom';
import { useNavigation } from '@react-navigation/native';

const Home: React.FC = () => {
  const navigation = useNavigation();

  return (
    <>
      <Header />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Proposta');
          }}
          style={{
            height: 60,
            width: '90%',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 8,
            borderRadius: 10,
            marginTop: 32
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Toledo</Text>
          <View style={{ height: 40, width: 40, borderRadius: 40, backgroundColor: '#F2994A', alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>2</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Proposta');
          }}
          style={{
            height: 60,
            width: '90%',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 8,
            borderRadius: 10,
            marginTop: 32
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Cascavel</Text>
          <View style={{ height: 40, width: 40, borderRadius: 40, backgroundColor: '#F2994A', alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>6</Text>
          </View>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => {
            navigation.navigate('Proposta');
          }}
          style={{
            height: 60,
            width: '90%',
            backgroundColor: '#fff',
            alignItems: 'center',
            justifyContent: 'space-between',
            flexDirection: 'row',
            padding: 8,
            borderRadius: 10,
            marginTop: 32
          }}>
          <Text style={{ fontSize: 20, fontWeight: 'bold' }}>Assis Chateaubriand</Text>
          <View style={{ height: 40, width: 40, borderRadius: 40, backgroundColor: '#F2994A', alignItems: 'center', justifyContent: 'center', }}>
            <Text style={{ fontSize: 20, fontWeight: 'bold', color: '#FFF' }}>1</Text>
          </View>
        </TouchableOpacity>
      </View>
      <Bottom />
    </>
  );
}

export default Home;
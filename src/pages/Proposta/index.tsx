import React from 'react';
import { View, ScrollView } from 'react-native';

import Card from '../../components/Card';
import Header from '../../components/Header';

const Proposta: React.FC = () => {
  return (
    <>
      <Header />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <ScrollView showsVerticalScrollIndicator={false} style={{ flex: 1, marginTop: 32 }}>
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
    </>
  );
};

export default Proposta;

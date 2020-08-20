import React from 'react';
import { View, ScrollView } from 'react-native';

import Card from '../../components/Card';
import Header from '../../components/Header';
import Bottom from '../../components/Bottom';

const Proposta: React.FC = () => {
  return (
    <>
      <Header />
      <View style={{ flex: 1, alignItems: 'center' }}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          style={{ flex: 1, marginTop: 32 }}>
          <Card />
          <Card />
          <Card />
        </ScrollView>
      </View>
      <Bottom />
    </>
  );
}

export default Proposta;
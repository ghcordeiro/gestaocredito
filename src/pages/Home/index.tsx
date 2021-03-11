import React from 'react';
import { View, Text } from 'react-native';
import Colors from '../../assets/colors';

const Home = () => {
  return (
    <>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center', backgroundColor: Colors.primary }}>
        <Text style={{ fontSize: 20, fontWeight: 'bold', color: Colors.white }}>Maxicon Sistemas Ltda</Text>
      </View>
    </>
  );
};

export default Home;

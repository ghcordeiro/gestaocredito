import React from 'react';
import 'react-native-gesture-handler';
import { View, StatusBar, SafeAreaView } from 'react-native';
import Proposta from './pages/Proposta';
import Home from './pages/Home';
import PropostaDetalhe from './pages/PropostaDetalhe';
import Colors from './assets/colors';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.green_header} translucent />
      <View style={{ backgroundColor: '#E5E5E5', flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            mode="modal">
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Proposta" component={Proposta} />
            <Stack.Screen name="PropostaDetalhe" component={PropostaDetalhe} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
}

export default App;

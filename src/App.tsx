import React from 'react';
import 'react-native-gesture-handler';
import { View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator, CardStyleInterpolators } from '@react-navigation/stack';
import codePush from "react-native-code-push";
import Home from './pages/Home';
import Colors from './assets/colors';

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={Colors.primary} translucent />
      <View style={{ backgroundColor: '#E5E5E5', flex: 1 }}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerShown: false,
              cardStyleInterpolator: CardStyleInterpolators.forFadeFromBottomAndroid,
            }}
            mode="modal"
          >
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </>
  );
};

export default codePush({
  checkFrequency: codePush.CheckFrequency.ON_APP_RESUME
})(App);

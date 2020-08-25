import React from 'react';
import { View, Text, Dimensions } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Icon from 'react-native-vector-icons/Foundation';
import Header from '../../components/Header';
import IndicadorFases from '../../components/IndicadorFases';
import Colors from '../../assets/colors';

// import { Container } from './styles';

const PropostaDetalhe: React.FC = () => {
  const Tab = createBottomTabNavigator();

  function HomeScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ backgroundColor: '#FFF' }}>
          <IndicadorFases details={true} />
        </View>
      </View>
    );
  }

  function SettingsScreen() {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Settings!</Text>
      </View>
    );
  }

  const iconName = [{
    page: 'Settings',
    icon: 'graph-trend',
  },
  {
    page: 'Home',
    icon: 'page',
  }];

  return (
    <>
      <Header />
      <>
      </>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            const icon = iconName.find((i) => i.page === route.name);

            return <Icon name={icon ? icon.icon : 'x'} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#219653',
          inactiveTintColor: '#6FCF97',
          labelPosition: 'beside-icon',
        }}>
        <Tab.Screen
          name="Home"
          options={{
            title: 'Home page',
          }}
          component={HomeScreen}
        />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </>
  );
};

export default PropostaDetalhe;

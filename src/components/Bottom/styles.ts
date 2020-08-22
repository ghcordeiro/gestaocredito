import { Platform } from 'react-native';
import styled from 'styled-components/native';
import { getBottomSpace } from 'react-native-iphone-x-helper';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/percentageToDP';
import Colors from '../../assets/colors';

export const Container = styled.View`
  height: ${
  Platform.OS === 'ios' ?
    heightPercentageToDP('5') + getBottomSpace() :
    heightPercentageToDP('8')
  }px;
  width: 100%;
  background-color: ${Colors.white};
`;

export const Row = styled.View`
  height: ${Platform.OS === 'ios' ?
    heightPercentageToDP('5') :
    heightPercentageToDP('8')}px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const BottomButton = styled.TouchableOpacity`
  flex: 1;
  height: 100%;
  justify-content: center;
  align-items: center;
`;

export const ButtonText = styled.Text`
  font-family: 'Roboto-Medium';
  color: ${Colors.white};
  font-size: 16px;
`;

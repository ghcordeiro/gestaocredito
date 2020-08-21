import styled from 'styled-components/native';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/percentageToDP';
import Colors from '../../assets/colors';
import { RectButton } from 'react-native-gesture-handler';

export const Container = styled.View`
  height: ${heightPercentageToDP('10')}px;
  width: 100%;
  background-color: ${Colors.white};
`;

export const Row = styled.View`
  flex: 1;
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

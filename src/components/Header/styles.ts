import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/percentageToDP';
import Colors from '../../assets/colors';

export const Container = styled.View`
  height: ${heightPercentageToDP('18')}px;
  width: 100%;
  background-color: ${Colors.green_header};
  align-items: center;
  justify-content: center;
`;

export const HeaderRow = styled.View`
  flex-direction: row;
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
`;

export const HeaderButton = styled(RectButton)`
  flex: 1;
  align-items: center;
  justify-content: center;
  padding: 16px 10px;
  border-radius: 5px;
`;

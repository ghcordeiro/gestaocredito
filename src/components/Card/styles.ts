import styled from 'styled-components/native';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/percentageToDP';
import Colors from '../../assets/colors';

export const Container = styled.TouchableOpacity`
  height: ${heightPercentageToDP(23)}px;
  width: ${widthPercentageToDP(100) - 32}px;
  border-radius: 5px;
  background-color: #FFF;
  margin-bottom: 16px;
`;

export const Header = styled.View`
  height: 18%;
  background-color: ${Colors.green_header};
  width: 100%;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  padding: 0 8px;
  justify-content: center;
`;

export const HeaderText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: ${Colors.white};
  font-family: 'Roboto-Bold';
`;

export const Body = styled.View`
  flex: 1;
  padding: 8px;
`;

export const BodyRow = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex: 2;
`;

export const BodyText = styled.Text`
  font-size: 14px;
  color: ${Colors.default.text};
  font-family: 'Roboto-Regular';
`;
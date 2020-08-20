import styled from 'styled-components/native';
import { heightPercentageToDP, widthPercentageToDP } from '../../utils/percentageToDP';
import Colors from '../../../assets/colors';

export const Container = styled.View`
  height: ${heightPercentageToDP('18')}px;
  width: 100%;
  background-color: ${Colors.green_header};
`;

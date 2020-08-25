import styled from 'styled-components/native';
import { Ratio, heightPercentageToDP } from '../../utils/percentageToDP';
import Colors from '../../assets/colors';

interface ITextProps {
  details: boolean;
}

interface ICircleProps {
  status: 'active' | 'inactive' | 'next';
  details: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  width: 100%;
  height: ${heightPercentageToDP(15)}px;
  padding: 16px 0;
`;

export const Column = styled.View`
  flex-direction: column;
  flex: 1;
  align-items: center;
  justify-content: space-between;
  padding: 0 16px;
`;

export const CircleContainer = styled.View`
  flex: 1;
`;

export const Circle = styled.View<ICircleProps>`
  height: ${(props) => heightPercentageToDP(props.details ? 6 : 4)}px;
  width: ${(props) => heightPercentageToDP(props.details ? 6 : 4)}px;
  border-radius: ${(props) => heightPercentageToDP(props.details ? 6 : 4)}px;
  ${(props) => {
    if (props.status === "active") {
      return `background-color: #27AE60;`
    } else if (props.status === "next") {
      return `background-color: #E0E0E0;
       border: 1px solid #717171;`
    } else {
      return `background-color: #E0E0E0;`
    }
  }}
`;

export const CardText = styled.View`
  flex: 1;
`;

export const TextAprovacao = styled.Text<ITextProps>`
  font-size: ${(props) => props.details ? 16 : 14}px;
  text-align: left;
  font-family: 'Lato-Medium';
`;

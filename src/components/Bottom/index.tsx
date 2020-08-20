import React from 'react';
import { View, Text } from 'react-native';

import { Container, BottomButton, Row } from './styles';
import Colors from '../../../assets/colors';

const Bottom: React.FC = () => {
  return (
    <Container>
      <Row>
        <BottomButton onPress={() => { }} style={{backgroundColor: Colors.green_header}}>
          <Text>Em andamento</Text>
        </BottomButton>
        <BottomButton onPress={() => { }} style={{backgroundColor: '#828282'}}>
          <Text>Finalizado</Text>
        </BottomButton>
      </Row>
      <Row />
    </Container>
  );
}

export default Bottom;
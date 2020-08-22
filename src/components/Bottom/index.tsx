import React from 'react';
import { View, Text } from 'react-native';

import { Container, BottomButton, Row, ButtonText } from './styles';
import Colors from '../../assets/colors';

const Bottom: React.FC = () => {
  return (
    <Container>
      <Row>
        <BottomButton onPress={() => { }} style={{ backgroundColor: Colors.green_header }}>
          <ButtonText>Em andamento</ButtonText>
        </BottomButton>
        <BottomButton onPress={() => { }} style={{ backgroundColor: '#828282' }}>
          <ButtonText>Finalizado</ButtonText>
        </BottomButton>
      </Row>
    </Container>
  );
}

export default Bottom;

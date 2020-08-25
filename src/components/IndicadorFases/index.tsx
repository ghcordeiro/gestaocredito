import React from 'react';

import { Container, Column, TextAprovacao, Circle, CardText, CircleContainer } from './styles';

interface IIndicadorFasesProps {
  details: boolean;
}

const IndicadorFases: React.FC<IIndicadorFasesProps> = ({ details }) => {
  return (
    <Container>
      <Column>
        <Circle status={'active'} details={details} />
        <CardText>
          <TextAprovacao details={details} >
            Jean{"\n"}19/08/20{"\n"}{details ? '08:40' : ''}
          </TextAprovacao>
        </CardText>
      </Column>
      <Column>
        <Circle status={'active'} details={details} />
        <CardText>
          <TextAprovacao details={details} >
            Guilherme{"\n"}19/08/20{"\n"}{details ? '08:40' : ''}
          </TextAprovacao>
        </CardText>
      </Column>
      <Column>
        <Circle status={'next'} details={details} />
        <CardText>
          <TextAprovacao details={details} ></TextAprovacao>
        </CardText>
      </Column>
      <Column>
        <Circle status={'inactive'} details={details} />
        <CardText>
          <TextAprovacao details={details} ></TextAprovacao>
        </CardText>
      </Column>
      {/* <Column>
        <Circle status={'inactive'} details={details} />
        <CardText>
          <TextAprovacao details={details} ></TextAprovacao>
        </CardText>
      </Column> */}
    </Container>
  );
};

export default IndicadorFases;

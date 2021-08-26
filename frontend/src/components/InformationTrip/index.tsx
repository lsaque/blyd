import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

const Destination = styled.View`
`;

const Title = styled.Text`
  font-weight: 300;
  color: #969696;
  font-size: 18px;
`;

const Destiny = styled.Text`
  font-size: 20px;
  font-weight: 700;
  max-width: 185px;
`;

const ButtonSetAdvice = styled.TouchableOpacity`
  width: 150px;
  height: 50px;
  border-radius: 10px;
  background-color: #D6FFE1;
  align-items: center;
  justify-content: center;
`;

const ButtonText = styled.Text`
  color: #4A4A4A;
`;

export default ({destiny, onPress, distance}: any) => {
  return (
    <Container>
      <Destination>
        <Title>Destino:</Title>
        <Destiny numberOfLines={1}>{destiny}</Destiny>
      </Destination>
      <ButtonSetAdvice onPress={onPress}>
        <ButtonText>Marcar Aviso</ButtonText>
      </ButtonSetAdvice>
    </Container>
  );
}

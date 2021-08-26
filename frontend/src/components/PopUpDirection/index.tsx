import React from 'react';
import styled from 'styled-components/native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';

const Container = styled.View`
  margin-top: 20px;
  border-radius: 20px;
  background-color: #fff;
  height: 100px;
  justify-content: center;
  box-shadow: -1px 2px 9px #00000018;
`;

const Wrapper = styled.View`
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  justify-content: space-between;
`;

const Left = styled.View`
  /* border: 1px solid red; */
  align-items: center;
  width: 50px;
  height: 100%;
  justify-content: center;
`;
const Center = styled.View`
  /* border: 1px solid red; */
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const TextCenter = styled.Text`
  font-size: 18px;
  width: 195px;
  /* border: 1px solid red; */
  color: #4A4A4A;
`;

const Strong = styled.Text`
  font-weight: bold;
`

const Right = styled.View`
  /* padding: 0 20px; */
`;

const Button = styled.TouchableOpacity`
  width: 50px;
  height: 100%;
  /* border: 1px solid red; */
  align-items: center;
  justify-content: center;
`;

export default ({arrowDirection, text, distance}: any) => {
  return (
    <React.Fragment>
      <Container style={{elevation: 20}}>
        <Wrapper>

          <Left>
            <FontAwesome name={arrowDirection} size={32} color="#4A4A4A" />
          </Left>

          <Center>
            <TextCenter>Siga em frente por mais <Strong>4 metros ou 5 passos</Strong></TextCenter>
          </Center>

          <Right>
            <Button>
              <Ionicons name="mic" size={30} color="#4A4A4A" />
            </Button>
          </Right>

        </Wrapper>
      </Container>
    </React.Fragment>
  );
}

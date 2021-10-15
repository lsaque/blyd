import React from 'react';
import styled from 'styled-components/native';
import { FontAwesome, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';

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
  align-items: center;
  width: 50px;
  /* height: 100%; */
  justify-content: center;
  /* border: 1px solid red; */
`;
const Center = styled.View`
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const TextCenter = styled.Text`
  /* border: 1px solid red; */
  font-size: 18px;
  width: 195px;
  color: #4A4A4A;
`;

const Strong = styled.Text`
  font-weight: bold;
`

const Right = styled.View``;

const Button = styled.TouchableOpacity`
  width: 50px;
  height: 100%;
  align-items: center;
  justify-content: center;
  /* border: 1px solid red; */
`;

export default ({arrowDirection, text, distance, arrowType}: any) => {
  return (
    <React.Fragment>
      <Container style={{elevation: 20}}
        accessibilityHint={text + distance}
      >
        <Wrapper>

          <Left 
            accessible={false}
            importantForAccessibility="no-hide-descendants"
          >
            {
              arrowDirection != "" ? 
              <FontAwesome name={arrowDirection} size={32} color="#4A4A4A" /> 
              :
              <MaterialCommunityIcons name={arrowType} size={32} color="#4A4A4A" />
            }
          </Left>

          <Center>
            <TextCenter>{text}<Strong>{distance}</Strong></TextCenter>
          </Center>

          <Right
            accessible={false}
            importantForAccessibility="no-hide-descendants"
          >
            <Button>
              <Ionicons name="volume-high" size={30} color="#4A4A4A" />
            </Button>
          </Right>

        </Wrapper>
      </Container>
    </React.Fragment>
  );
}

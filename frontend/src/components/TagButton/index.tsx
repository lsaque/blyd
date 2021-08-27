import React from 'react';
import styled from 'styled-components/native';

const Container = styled.View`
  margin: 10px 0;
  height: 40px;
  align-items: center;
`;

const Tag = styled.TouchableOpacity`
  background-color: #ffffff53;
  height: 30px;
  padding: 5px 10px;
  border-radius: 15px;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
`;

const TagText = styled.Text`
  font-size: 16px;
  color: #FFF;
  margin: 10px;
`;

export default ({title, onPress} : any) => {
  return(
    <Container>
      <Tag onPress={onPress}>
        <TagText>{title}</TagText>
      </Tag>
    </Container>
  );
}
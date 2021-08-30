import React from 'react';
import styled from 'styled-components/native';
import TagButton from '../TagButton';

const Container = styled.View`
  /* height: 100%; */
`;

const Title = styled.Text`
  font-size: 20px;
  font-weight: 700;
  color: white;
  margin-bottom: 15px;
`;

const ListTag = styled.Text`
  justify-content: space-between;
  align-items: center;
  height: 100%;
`;

export default ({title} : any) => {
  return(
    <Container>
      <Title>{title}</Title>

      <ListTag>
        <TagButton title="Banheiro A2D"/>
        <TagButton title="Administração A2" />
        <TagButton title="Refeitório A2V"/>
        <TagButton title="Secretaria 3B"/>
        <TagButton title="Sala A2V"/>
        <TagButton title="Sala BZA"/>
        <TagButton title="Sala 123"/>
      </ListTag>

    </Container>
  );
}
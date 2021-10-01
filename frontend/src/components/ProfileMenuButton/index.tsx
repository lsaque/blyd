import React from "react";
import styled from "styled-components/native";
import { Entypo } from '@expo/vector-icons';

const Container = styled.TouchableOpacity`
  background-color: #F2F2F2;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
  width: 45px;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

interface IProfileMenuButtonProps{
  onPress?: object,
}

const ProfileMenuButton: React.FC<IProfileMenuButtonProps> = ({
  onPress
}: any) => {
  return (
    <Container onPress={onPress}>
      <Wrapper>
        <Entypo name="dots-three-horizontal" size={24} color="black" />
      </Wrapper>
    </Container>
  )
}
export default ProfileMenuButton;

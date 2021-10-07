import React from "react";
import styled from "styled-components/native";

import { Feather } from '@expo/vector-icons';

export const Container = styled.TouchableOpacity`
  /* border: 1px solid red; */
  /* background-color: #e1dafd; */

  position: absolute;
  right: 0;
  bottom: 0;
  z-index: 99;

  height: 70px;
  width: 70px;
  border-radius: 35px;

  margin-bottom: 30px;
  margin-right: 20px;

  justify-content: center;
  align-items: center;
`;

interface IFloatingAddButtonProps{
  onPress: Function,
  backgroundColor?: String,
  iconColor?: String,
}

const FloatingAddButton: React.FC<IFloatingAddButtonProps> = ({
  onPress, backgroundColor, iconColor
}: any) => {
  // console.log(backgroundColor)
  return (
    <Container 
      style={{
        elevation: 7, 
        backgroundColor: backgroundColor,
        borderColor: iconColor.concat("80"),
        // borderWidth: 1,
      }}
      onPress={onPress}
    >
      <Feather name="plus" size={35} color={iconColor} />
    </Container>
  )
}
export default FloatingAddButton;

import React from "react";
import { Text } from "react-native";

import { Container } from "./styles";

interface IUserEditProfileProps{

}

const UserEditProfile: React.FC<IUserEditProfileProps> = ({}) => {
  return (
    <Container>
      <Text>UserEditProfile</Text>
    </Container>
  )
}
export default UserEditProfile;

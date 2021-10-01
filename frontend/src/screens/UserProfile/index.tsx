import React from "react";
import { Text } from "react-native";

import { Container } from "./styles";

interface IUserProfileProps{

}

const UserProfile: React.FC<IUserProfileProps> = ({}) => {
  return (
    <Container>
      <Text>UserProfile</Text>
    </Container>
  )
}
export default UserProfile;

import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
`;

const Photo = styled.Image`
  background-color: red;
  width: 55px;
  height: 55px;
  border-radius: 27.5px;
  margin-right: 5%;
  margin-bottom: 18px;
`;

interface IAdminPhotoProfileProps{
  imageProfile: object,
}

const AdminPhotoProfile: React.FC<IAdminPhotoProfileProps> = ({ imageProfile }: any) => {
  return (
    <Container>
       <Photo source={imageProfile}/>
    </Container>
  )
}
export default AdminPhotoProfile;

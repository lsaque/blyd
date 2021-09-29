import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  background-color: #D9CFFC;
  width: 55px;
  height: 55px;
  border-radius: 27.5px;
  align-items: center;
  justify-content: center;
`;

const QuantityNumber = styled.Text`
  color: #8363F6;
  font-weight: bold;
  font-size: 16px;
`;

interface IAdminButtonQuantityProfilesProps{
  number: number
}

const AdminButtonQuantityProfiles: React.FC<IAdminButtonQuantityProfilesProps> = ({ number }: any) => {
  return (
    <Container>
      <QuantityNumber>+{number}</QuantityNumber>
    </Container>
  )
}
export default AdminButtonQuantityProfiles;

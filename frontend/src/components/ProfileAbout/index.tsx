import React from "react";
import styled from "styled-components/native";

 const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin-bottom: 15px;
`;

 const BoxImage = styled.View`
  align-items: center;
  justify-content: center;
  height: 40px;
  width: 40px;
  border-radius: 10px;
  background-color: #F2F2F2;
`;

 const Placeholder = styled.Text`
  font-size: 16px;
  color: #797979;
  padding-left: 12px;
`;

 const BoldAnswer = styled.Text`
  color: #000;
  font-size: 16px;
  font-weight: bold;
  padding-left: 5px;
`;

interface IProfileAboutProps{
  placeholder: String,
  icon: Object,
  answer: any,
}

const ProfileAbout: React.FC<IProfileAboutProps> = ({
  placeholder, icon, answer
}) => {
  return (
    <Container>
      <BoxImage>{icon}</BoxImage>
      <Placeholder style={{flexWrap: "wrap", flex: 1}}>{placeholder + " "} 
        <BoldAnswer>{answer}</BoldAnswer>
      </Placeholder>
      
    </Container>
  )
}
export default ProfileAbout;

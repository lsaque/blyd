import React from "react";
import styled from "styled-components/native";

const Container = styled.TouchableOpacity`
  padding: 3% 7%;
  border-radius: 10px;
  justify-content: center;
  align-items: center;
`;

const Wrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Placeholder = styled.Text`
  margin-left: 8px;
  font-size: 14px;
  font-weight: bold;
`;

interface IProfileActionButtonProps{
  actionButton?: String | "delete" | "action"
  icon: object,
  placeholder?: String,
  onPress?: object,
  menuButton?: boolean,
}

const ProfileActionButton: React.FC<IProfileActionButtonProps> = ({
  icon, placeholder, onPress, actionButton
}: any) => {

  let backGroundColor = "#F2F2F2";
  let textColor = "#000";

  if(actionButton == "action"){
    backGroundColor = "#e1dafd";
    textColor = "#8363F6";
  } else if (actionButton == "delete"){
    backGroundColor = "#fae5e5";
    textColor = "#F66363";
  }

  return (
    <Container 
      onPress={onPress} 
      style={{
        backgroundColor: backGroundColor,
      }}
    >
      <Wrapper>
        {icon}
        <Placeholder style={{
          color: textColor,
        }}>{placeholder}</Placeholder>
      </Wrapper>
    </Container>
  )
}
export default ProfileActionButton;

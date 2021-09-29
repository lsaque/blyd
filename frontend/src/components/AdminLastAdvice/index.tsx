import React from "react";
import styled from "styled-components/native";
import { Feather, MaterialCommunityIcons  } from '@expo/vector-icons';
import { Text } from "react-native";

const Container = styled.View`
  margin: 0 20px;
  /* height: 160px; */
  border-color: #F2F2F2;
  border-width: 4px;
  border-radius: 16px;
  margin-bottom: 20px;
`;

const Header = styled.View`
  background-color: #F2F2F2;
  padding: 0 20px;
  flex-direction: row;
  height: 50px;
  justify-content: space-between;
`;

const Profile = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const UserPicture = styled.Image`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  margin-right: 10px;
`;

const UserName = styled.Text`
  color: #636363;
  font-size: 18px;
  max-width: 185px;
`;

const AdviceHour = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Hour = styled.Text`
  color: #636363;
  font-size: 15px;
  margin-left: 5px;
`;

const Content = styled.View`
  flex-direction: row;
  margin: 20px;
  justify-content: space-between;
  /* border: 1px solid red; */
`;

const DescriptionAdvice = styled.View`
  /* border: 1px solid red; */
`;

const AdviceName = styled.Text`
  font-size: 24px;
  font-weight: bold;
  /* max-width: 95%; */
  margin-bottom: 18px;
`;

const Tags = styled.View`
  flex-direction: row;
`;

const TimeRemaining = styled.TouchableOpacity`
  background-color: #e1dafd;
  padding: 6px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
`;

const Time = styled.Text`
  color: #8363F6;
  font-size: 15px;
  font-weight: bold;
  margin-left: 5px;
`;

const MenuOptions = styled.TouchableOpacity`
  align-items: center;
`;

interface IAdminLastAdviceProps{
  userPicture: Object,
  userName: String,
  adviceHour: String,
  adviceName: String,
  adviceTimeRemaining: String,
  adviceImportantTag?: boolean,
}

const AdminLastAdvice: React.FC<IAdminLastAdviceProps> = ({ 
  userPicture, userName, adviceHour, adviceName, adviceTimeRemaining, adviceImportantTag
} : any) => {
  return (
    <Container>

      <Header>
        <Profile>
          <UserPicture source={userPicture}/>
          <UserName numberOfLines={1}>{userName}</UserName>
        </Profile>
        <AdviceHour>
          <Feather name="paperclip" size={15} color="#636363" />
          <Hour>{adviceHour}</Hour>
        </AdviceHour>
      </Header>

      <Content>
        <DescriptionAdvice>
          <AdviceName numberOfLines={2}>{adviceName}</AdviceName>
          <Tags>
            <TimeRemaining>
              <MaterialCommunityIcons name="timer" size={20} color="#8363F6" />
              <Time>{adviceTimeRemaining}</Time>
            </TimeRemaining>
            {/* <ImportantTag>{adviceImportantTag}</ImportantTag> */}
          </Tags>
        </DescriptionAdvice>
        <MenuOptions>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="#707070" />
        </MenuOptions>
      </Content>

    </Container>
  )
}
export default AdminLastAdvice;

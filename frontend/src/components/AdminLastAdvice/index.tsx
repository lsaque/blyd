import React from "react";
import styled from "styled-components/native";
import { Feather, MaterialCommunityIcons  } from '@expo/vector-icons';
import { Text } from "react-native";

const Container = styled.View`
  border-color: #F2F2F2;
  border-width: 3px;
  border-radius: 16px;
  margin-bottom: 20px;
`;

const Header = styled.View`
  background-color: #F2F2F2;
  padding: 0 20px;
  flex-direction: row;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
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
  font-size: 16px;
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
  margin: 15px 20px;
  justify-content: space-between;
`;

const DescriptionAdvice = styled.View`
  /* width: 280px; */
`;

const AdviceName = styled.Text`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 5px;
  text-transform: uppercase;
`;

const Tags = styled.View`
  flex-direction: row;
  margin-top: 10px;
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
  font-size: 14px;
  font-weight: bold;
  margin-left: 5px;
`;

const ImportantTag = styled.TouchableOpacity`
  background-color: #faeaea;
  padding: 6px 15px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-left: 6px;
`;

const Impassable = styled.Text`
  color: #F66363;
  font-size: 14px;
  font-weight: bold;
`;

interface IAdminLastAdviceProps{
  userPicture: Object,
  userName: String,
  adviceHour: String,
  adviceName: String,
  adviceTimeRemaining: String,
  isImpassable: boolean,
  dueDay: String, 
  dueMonth: String, 
  dueYear: String, 
  dueHour: String, 
  dueMinute: String,
}

const AdminLastAdvice: React.FC<IAdminLastAdviceProps> = ({ 
  userPicture, 
  userName, 
  adviceHour, 
  adviceName, 
  adviceTimeRemaining, 
  isImpassable, 
  dueDay, 
  dueMonth, 
  dueYear, 
  dueHour, 
  dueMinute
} : any) => {

  let importantTagRender = <React.Fragment/>

  if(isImpassable){
    importantTagRender = (
      <ImportantTag>
        <Impassable>Intransitável</Impassable>
      </ImportantTag>
    )
  }

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
          <AdviceName numberOfLines={2} style={{flexWrap: "wrap"}}>{adviceName}</AdviceName>
          <Text>Vence {dueDay} de {dueMonth} de {dueYear} às {dueHour}:{dueMinute}</Text>
          <Tags>
            <TimeRemaining>
              <MaterialCommunityIcons name="timer" size={14} color="#8363F6" />
              <Time>{adviceTimeRemaining}</Time>
            </TimeRemaining>
            {importantTagRender}
          </Tags>
        </DescriptionAdvice>
      </Content>

    </Container>
  )
}
export default AdminLastAdvice;

import React from "react";
import styled from "styled-components/native";
import { Text } from "react-native";

const Container = styled.TouchableOpacity`
  border-color: #F2F2F2;
  background-color: #fafafa;
  border-width: 1px;
  border-radius: 16px;
  margin-bottom: 25px;
`;

const Header = styled.View`
  background-color: #f0f0f0;
  /* background-color: #F2F2F2; */
  /* background-color: #FFF; */
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
  color: #303030;
  font-size: 16px;
  max-width: 185px;
`;

const AdviceHour = styled.View`
  flex-direction: row;
  justify-content: center;
  align-items: center;
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
  margin-bottom: 7px;
  text-transform: uppercase;
`;

const ImportantTag = styled.TouchableOpacity`
  /* background-color: #f8dada; */
  /* background-color: #f35d5d; */
  /* padding: 6px 15px; */
  flex-direction: row;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  margin-left: 6px;
`;

const Impassable = styled.Text`
  /* color: #faeaea; */
  font-size: 14px;
  /* font-weight: bold; */
`;

interface IConcludedRequestProps{
  userPicture: String,
  userName: String,
  userEmail: String,
  status: boolean,
  isPCD: boolean,
  onPress: Function,
}

const ConcludedRequest: React.FC<IConcludedRequestProps> = ({ 
  userPicture, 
  userName, 
  userEmail,
  status,
  isPCD,
  onPress
} : any) => {

  const imageURL = "https://i.ibb.co/z6QY6m0/without-Photo.png";

  return (
    <Container onPress={onPress}>

      <Header>
        <Profile>
          <UserPicture source={{ uri: userPicture === "sem foto" ? imageURL: userPicture}}/>
          <UserName numberOfLines={1}>{userName}</UserName>
        </Profile>
        <AdviceHour>
          <ImportantTag>
            <Impassable 
              style={{
                color: status ? "#57952d" : "#F66363"
              }}
            >{status ? "Aceito" : "Recusado"}</Impassable>
          </ImportantTag>
        </AdviceHour>
      </Header>

      <Content>
        <DescriptionAdvice>
          <AdviceName numberOfLines={2} style={{flexWrap: "wrap"}}>{userEmail}</AdviceName>
          <Text>{ isPCD ? "Usuário PCD" : "Usuário não PCD"}</Text>
        </DescriptionAdvice>
      </Content>

    </Container>
  )
}
export default ConcludedRequest;

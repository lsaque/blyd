import React from 'react';
import styled from 'styled-components/native';
import { MaterialCommunityIcons  } from '@expo/vector-icons';

const Container = styled.TouchableHighlight`
  height: 60px;
  margin: 0 20px;
  padding: 0 10px;
  margin-bottom:10px;
  /* background-color: #f8f7f758; */
  background-color: #f8f7f7;

  border-radius: 10px;
  border: 1px solid #ECECEC;

  flex-direction: row;
  justify-content: space-between;
  /* justify-content: space-evenly; */
  align-items: center;
  opacity: 1;
`;

const Image = styled.View`
  /* border: 1px solid red; */
  width: 13%;
  height:100%;
  justify-content: center;
  align-items: center;
`;

const PersonPicture = styled.Image`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

const Details = styled.View`
  /* border: 1px solid red; */
  /* width: 50%; */
  height: 100%;
  justify-content: center;
  width: 140px;
`;

const Name =  styled.Text`
  color: #000000;
  font-size: 16px;
`;

const Email =  styled.Text`
  color: #a1a1a1;
  font-size: 14px;
`;

const Department =  styled.View`
  /* border: 1px solid red; */
  width: 25%;
  height: 100%;
  align-items: center;
  justify-content: center;
`;

const DepartmentName = styled.Text`
  color: #156E6E;
  background-color: #DBF4F4;
  padding: 3px 12px;
  border-radius: 20px;
`;

const MenuIcon = styled.View`
  /* border: 1px solid red; */
  height: 100%;
  width: 8%;
  align-items: center;
  justify-content: center;
`;

interface IUserListCardProps{
  name: String,
  department: String,
  email: String,
  picture: Object,
  onPress: Object,
}

const UserListCard: React.FC<IUserListCardProps> = ({ 
  navigation, name, department, picture, email, onPress
}: any ) => {
  return (
    <Container underlayColor="#ebebeb" onPress={onPress}>
        <React.Fragment>

        <Image>
          <PersonPicture source={picture}/>
        </Image>

        <Details>
          <Name numberOfLines={1}>{name}</Name>
          <Email numberOfLines={1}>{email}</Email>
        </Details>

        <Department>
          <DepartmentName>{department}</DepartmentName>
        </Department>

        <MenuIcon>
          <MaterialCommunityIcons name="dots-vertical" size={24} color="#707070" />
        </MenuIcon>
      </React.Fragment>
    </Container>
  );
}

export default UserListCard;
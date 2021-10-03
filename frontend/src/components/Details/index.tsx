import React from "react";
import styled from "styled-components/native";

const Container = styled.View`
  width: 100%;
  justify-content: center;
  align-items: center;
  margin-top: -75px;
`;

const Avatar = styled.Image`
  width: 140px;
  height: 140px;
  border-radius: 70px;
  border-color: #fff;
  border-width: 6px;
`;

const Tag = styled.View`
  margin-top: -20px;
  border: 5px solid #fff;
  justify-content: center;
  align-items: center;
  background-color: #E8E2FD;
  width: 70px;
  border-radius: 35px;
  height: 35px;
`;

const Pcd = styled.Text`
  color: #8363F6;
  font-size: 14px;
  font-weight: bold;
`;

const Name = styled.Text`
  margin-top: 15px;
  font-size: 18px;
  color: #000;
  font-weight: bold;
`;

const Email = styled.Text`
  font-size: 16px;
  color: #BEBEBE;
`;

interface IDetailsProps{
  avatar: object,
  isPCD: boolean,
  name?: String,
  email?: String,
  hideNameAndEmail?: boolean,
}

const Details: React.FC<IDetailsProps> = ({
  avatar, isPCD, name, email, hideNameAndEmail
}: any) => {

  let pcdTagRender = <React.Fragment/>
  let nameAndEmailRender = (
    <React.Fragment>
      <Name>{name}</Name>
      <Email>{email}</Email>
    </React.Fragment>
  )

  if(isPCD){
    pcdTagRender = (
      <Tag>
        <Pcd>PCD</Pcd>
      </Tag>
    )
  }

  if(hideNameAndEmail){
    nameAndEmailRender = <React.Fragment/>
  }
  
  return (
    <Container>
      <Avatar source={avatar} resizeMode="cover"/>
      {pcdTagRender}
      {nameAndEmailRender}
    </Container>
  )
}
export default Details;

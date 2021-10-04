import React from "react";
import { Text } from "react-native";
import styled from "styled-components/native";

import { Ionicons } from '@expo/vector-icons';

const Advice = styled.View`
  background-color: #F2F2F2;
  height: 40px;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
  margin-bottom: 15px;
`;

interface IMessageNoContentProps{
  text: String,
  type: "advice" | "route" | "call",
}

const MessageNoContent: React.FC<IMessageNoContentProps> = ({type, text}:any) => {

  let MessageNoContentRender = <React.Fragment/>

  switch (type) {
    case "advice":
      MessageNoContentRender = (
        <Advice>
          <Text>{text}</Text>
        </Advice>
      )
      break;

    case "route":
    
      break;

    case "call":
  
      break;
  
    default:
      break;
  }

  return (
    <>
      {MessageNoContentRender}
    </>
  )
}

export default MessageNoContent;

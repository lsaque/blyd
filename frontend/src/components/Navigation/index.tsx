import React from 'react';
import { View } from 'react-native';
import styled from 'styled-components/native';
import { AntDesign, MaterialIcons } from '@expo/vector-icons';


const Container = styled.View`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;  
  margin-top: 20px;
`;

const Button = styled.TouchableOpacity`
  height: 40px;
  width: 40px;
  border-radius: 10px;
  background-color: #00000040;
  justify-content: center;
  align-items: center;
`;

const TitleContent = styled.View`
  justify-content: center;
  align-items: center;
`;

const Title = styled.Text`
  font-weight: 300;
  font-size: 18px;
`;

const Strong = styled.Text`
  font-weight: 700;
`;


interface INavigationProps{
  onPress?: Function,
  title: String,
  titleStrong: String,
  lightContent?: boolean,
}

const Navigation: React.FC<INavigationProps> = ({
  onPress, title, titleStrong, lightContent
} : any) => {

  let lightStyle = "#4A4A4A";

  if(lightContent){
    lightStyle = "#FFF";
  }

  return(
    <Container 
      accessibilityHint="Barra de navegação superior com a opção de retornar a página anterior, visualizar o título e navegar até o menu"
    >
      <Button 
        onPress={onPress}
        accessibilityHint="Clique para retornar a página anterior"
      >
        <AntDesign name="arrowleft" size={24} color="white" />
      </Button>

      <TitleContent>
        <Title style={{color: lightStyle}}>{title} <Strong>{titleStrong}</Strong> </Title>  
      </TitleContent>

      <Button
        accessibilityHint="Clique para visulizar o menu"
      >
        <MaterialIcons name="menu" size={24} color="white" />
      </Button>
    </Container>
  );
}

export default Navigation;
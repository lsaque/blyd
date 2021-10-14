import React from 'react';
import { View, Text } from 'react-native';
import { Ionicons, MaterialIcons, AntDesign} from '@expo/vector-icons';

import FloatingAddButton from '../../components/FloatingAddButton';
import Navigation from '../../components/Navigation';
import SearchListNavigation from '../../components/SearchListNavigation';

import Background from "../../assets/Admin/background.png";
import { BackgroundImage } from '../../../styles';

import { 
  // Container,
  Settings,
} from './styles';

import { 
  Container, 
  ListOfUser 
} from '../CRUD/Admin/UserList/styles';
import SettingCard from '../../components/SettingCard';


interface ISettingProps{}

const setting = [
  {
    key: 1,
    title: "Informações Pessoais",
    description: "Atualizar seu nome, número de telefone e endereço de e-mail.",
    icon: <Ionicons name="person-outline" size={24} color="#8363F6" />,
  },
  {
    key: 2,
    title: "Notificações",
    description: "Receber alertas de avisos marcados.",
    icon: <Ionicons name="notifications-outline" size={24} color="#8363F6" />,
  },
  {
    key: 3,
    title: "Aviso",
    description: "Editar configurações de aviso.",
    icon: <Ionicons name="ios-alert-circle-outline" size={24} color="#8363F6" />,
  },
  {
    key: 4,
    title: "Comunidade",
    description: "Encontrar usuários PCD's.",
    icon: <Ionicons name="ios-people-outline" size={24} color="#8363F6" />,
  },
  {
    key: 5,
    title: "Acessibilidade",
    description: "Alterar as configurações de acessibilidade do aparelho.",
    icon: <MaterialIcons name="accessibility" size={24} color="#8363F6" />,
  },
  {
    key: 6,
    title: "Fechar Aplicativo",
    description: "Sair do aplicativo.",
    icon: <AntDesign name="close" size={24} color="#8363F6" />,
  },
  {
    key: 7,
    title: "Desconectar",
    description: "Desconectar conta e sair do aplicativo.",
    icon: <AntDesign name="logout" size={24} color="#8363F6" />,
  },
]

const Setting: React.FC<ISettingProps> = ({ navigation }: any) => {
  return(
    <Container>

      <BackgroundImage 
        source={ Background } 
        resizeMode="cover" 
        style={{
          paddingHorizontal: 20,
          height: 110
        }}
      >
        <Navigation
          onPress={() => navigation.goBack('history')}
          title="Menu"
          titleStrong="Configurações"
          lightContent={true}
        />
        <SearchListNavigation 
          text="Busque pela configuração"
        />
      </BackgroundImage>

      <Settings>
        {
          setting?.map(setting => (
            <SettingCard
              key={setting.key}
              icon={setting.icon}
              title={setting.title}
              description={setting.description}
              onPress={()=>{}}
            />
          ))
        }

      </Settings>
    </Container>
  )
}
export default Setting;
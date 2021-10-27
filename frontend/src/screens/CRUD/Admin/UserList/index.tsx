import React, { useState, useContext } from "react";
import { Text, View } from "react-native";
import { BackgroundImage } from "../../../../../styles";
import { SwipeListView } from 'react-native-swipe-list-view';

import Background from "../../../../assets/Admin/background.png";
// import Background from "../../../../assets/UserList/background.png";

import AdminTitleFilter from "../../../../components/AdminTitleFilter";
import Navigation from "../../../../components/Navigation";
import SearchListNavigation from "../../../../components/SearchListNavigation";
import UserListCard from "../../../../components/UserListCard";
import TrashDelete from "../../../../components/TrashDelete";
import FloatingAddButton from "../../../../components/FloatingAddButton";

import { 
  Container,
  ListOfUser,
} from "./styles";
import { usuario } from "../../../../types/usuario";
import { apiData } from "../../../../types/apiData";
import ApiContext from "../../../../contexts/ApiContext";
import { useFocusEffect } from "@react-navigation/core";
import axios from "axios";
import { BASE_URL } from "../../../../utils/requests";

interface IUserListProps{}

const UserList: React.FC<IUserListProps> = ({ navigation }: any) => {


  const [ usuariosData, setUsuariosData ] = useState<usuario[]>(useContext(ApiContext).state.usuarios);

  useFocusEffect(
    React.useCallback(() => {
      function setData() {
        axios.get(`${BASE_URL}/usuarios`).then(response => {
          setUsuariosData(response.data as usuario[]);
        })
      }

      setData();
      const interval = setInterval(() => setData(), 2000);
      return () => clearInterval(interval);
    },[])
  );

  return (
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
          title="Listar"
          titleStrong="Usuários"
          lightContent={true}
        />
        <SearchListNavigation 
          text="Buscar por nome, id ou setor"
        />
      </BackgroundImage>

      <View style={{marginBottom: 220}}>
        <ListOfUser>
          <FloatingAddButton
            onPress={() => navigation.navigate("UserCreateProfile")}
            backgroundColor="#ede9f8"
            // backgroundColor="#fff"
            iconColor="#8363F6"
            // iconColor="#fff"
          />

          <SwipeListView
            data={usuariosData}
            keyExtractor={(item, index) => item.id.toString()}
            ListHeaderComponent={          
              <AdminTitleFilter 
                text="Usuários"
                filter={true}
                marginTop={50}
              />
            }

            renderItem={ (userData) => {
              return userData.item.status ?                
                <UserListCard
                  picture={userData.item.foto}
                  name={userData.item.nome}
                  email={userData.item.email}
                  department={userData.item.setor.nome}
                  isADM={userData.item.admin}
                  onPress={() => navigation.navigate("UserProfile", { user : userData.item })}
                />
                :
                <View />
            }}
            
            rightOpenValue={-75}

            renderHiddenItem={(data) => (
              <TrashDelete
                onPress={() => {
                  //Falar isaque
                  alert("Apagar item: " + data.index)
                }}
              />
            )}
          />
        </ListOfUser>
      </View>
    </Container>
  )
}

export default UserList;
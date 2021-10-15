import React, { useState } from "react";
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

interface IUserListProps{}

const UserList: React.FC<IUserListProps> = ({ navigation, route }: any) => {


  const { usuariosData } = route.params;
  const usersData = usuariosData as usuario[];

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
            data={usersData}
            ListHeaderComponent={          
              <AdminTitleFilter 
                text="Usuários"
                filter={true}
                marginTop={50}
              />
            }

            renderItem={ (data) => (
              <UserListCard
                key={data.item.id}
                picture={Background}
                name={data.item.nome}
                email={data.item.email}
                department={data.item.setor.nome}
                onPress={() => navigation.navigate("UserProfile", {})}
              />
            )}
            
            rightOpenValue={-75}

            renderHiddenItem={(data) => (
              <TrashDelete
                onPress={() => {
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
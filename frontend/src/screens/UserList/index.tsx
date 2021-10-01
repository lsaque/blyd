import React from "react";
import { Text, View } from "react-native";
import { BackgroundImage } from "../../../styles";
import { SwipeListView } from 'react-native-swipe-list-view';
import { LoadingIcon } from "../Preload/styles";

// import Background from "../../assets/Admin/background.png";
import Background from "../../assets/UserList/background.png";
import AdminTitleFilter from "../../components/AdminTitleFilter";
import Navigation from "../../components/Navigation";
import SearchListNavigation from "../../components/SearchListNavigation";
import UserListCard from "../../components/UserListCard";

import { 
  Container,
  ListOfUser
} from "./styles";
import TrashDelete from "../../components/TrashDelete";

interface IUserListProps{

}

const UserList: React.FC<IUserListProps> = ({ navigation }: any) => {

  const listViewData = Array(20).fill("").map((_, i) => ({ 
    key: `${i}`, 
    text: `item #${i}` 
  }));

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
        />
        <SearchListNavigation 
          text="Buscar por nome, id ou setor"
        />
      </BackgroundImage>

      <View style={{marginBottom: 220}}>
        <ListOfUser>
          <SwipeListView
            data={listViewData}
            ListHeaderComponent={          
              <AdminTitleFilter 
                text="Usuários"
                filter={true}
              />
            }

            renderItem={ (data) => (
              <UserListCard
                picture={Background}
                name="Isaque Souza"
                email="isaque@gmail.com"
                department="RH"
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

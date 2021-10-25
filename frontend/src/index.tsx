import React, {useEffect, useContext } from 'react';
import { BackgroundImage } from '../styles';

import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';
import { createDrawerNavigator } from '@react-navigation/drawer';

import SignIn from './screens/SignIn';
import Login from './screens/Login';
import Home from './screens/Home';
import Search from './screens/Search';
import Activity from './screens/Activity';
import Setting from './screens/Setting';
import Localization from './screens/Localization';
import Contact from './screens/Contact';
import Advice from './screens/Advice';
import LiveLocalization from './screens/LiveLocalization';
import MarkAdvice from './screens/MarkAdvice';
import SearchContact from './screens/SearchContact';
import Admin from './screens/Admin';
import UserProfile from './screens/UserProfile';
import UserList from './screens/CRUD/Admin/UserList';
import UserEditProfile from './screens/CRUD/Admin/UserEditProfile';
import UserCreateProfile from './screens/CRUD/Admin/UserCreateProfile';
import Assigned from './screens/CRUD/Admin/AdviceList/Assigned';
import Concluded from './screens/CRUD/Admin/AdviceList/Concluded';
import AdviceProfile from './screens/AdviceProfile';
import AdviceEditProfile from './screens/CRUD/Admin/AdviceEditProfile';
import Requested from './screens/CRUD/Admin/RequestList/Requested';
import Answered from './screens/CRUD/Admin/RequestList/Answered';

import Navigation from './components/Navigation';

const AdviceTab = createMaterialTopTabNavigator();

const MainTab = createMaterialBottomTabNavigator();
const UserTab = createMaterialBottomTabNavigator();
const AdminTab = createMaterialBottomTabNavigator();

const AdminStack = createStackNavigator();
const UserStack = createStackNavigator();
const LoginStack = createStackNavigator();

import Background from "./assets/Admin/background.png";
import { NavigationContainer } from '@react-navigation/native';
import { getApiData } from './data/GetDataApi';
import { apiData } from './types/apiData';
import ApiContext from './contexts/ApiContext';

function AdminAdviceTopTab({ navigation }: any) {
  return (
    <React.Fragment>
      <BackgroundImage 
        source={ Background } 
        resizeMode="cover" 
        style={{
          paddingHorizontal: 20,
          height: 80
        }}
      >
        <Navigation
          title="Listar"
          titleStrong="Avisos"
          onPress={() => navigation.goBack('history')}
          lightContent={true}
        />
      </BackgroundImage>

      <AdviceTab.Navigator
        initialRouteName='Assigned'
        backBehavior='history'
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#fff',
            // paddingHorizontal: 20,
            // backgroundColor: '#f8f7f7',
            // height: 50,
          },
          tabBarLabelStyle: {
            textTransform: 'capitalize',
            fontSize: 16,
          },
          tabBarIndicatorStyle: {
            // backgroundColor: "#000",
            backgroundColor: '#8363F6',
          },
          tabBarInactiveTintColor: "#a3a3a3",
          tabBarActiveTintColor: "#8363F6",
        }}
        sceneContainerStyle={{
          backgroundColor: "#fff"
        }}
      >
        <AdviceTab.Screen 
          name="Assigned" 
          component={Assigned} 
          options={{
            tabBarLabel: "Atribuídos",
          }}
        />
        <AdviceTab.Screen 
          name="Concluded" 
          component={Concluded} 
          options={{
            tabBarLabel: "Concluídos"
          }}
        />
      </AdviceTab.Navigator>
    </React.Fragment>
  );
}

function AdminRequestTopTab({ navigation }: any) {
  return (
    <React.Fragment>
      <BackgroundImage 
        source={ Background } 
        resizeMode="cover" 
        style={{
          paddingHorizontal: 20,
          height: 80
        }}
      >
        <Navigation
          title="Listar"
          titleStrong="Solicitações"
          onPress={() => navigation.goBack('history')}
          lightContent={true}
        />
      </BackgroundImage>

      <AdviceTab.Navigator
        initialRouteName='Requested'
        backBehavior='history'
        screenOptions={{
          tabBarStyle: {
            backgroundColor: '#fff',
            // paddingHorizontal: 20,
            // backgroundColor: '#f8f7f7',
            // height: 50,
          },
          tabBarLabelStyle: {
            textTransform: 'capitalize',
            fontSize: 16,
          },
          tabBarIndicatorStyle: {
            // backgroundColor: "#000",
            backgroundColor: '#8363F6',
          },
          tabBarInactiveTintColor: "#a3a3a3",
          tabBarActiveTintColor: "#8363F6",
        }}
        sceneContainerStyle={{
          backgroundColor: "#fff"
        }}
      >
        <AdviceTab.Screen 
          name="Requested" 
          component={Requested} 
          options={{
            tabBarLabel: "Solicitados ",
          }}
        />
        <AdviceTab.Screen 
          name="Answered" 
          component={Answered} 
          options={{
            tabBarLabel: "Respondidos"
          }}
        />
      </AdviceTab.Navigator>
    </React.Fragment>
  );
}

function UserBottomTab(){
  return(
    <UserTab.Navigator
      initialRouteName='HomeTab'
      backBehavior='history'
      shifting={true}
      activeColor='#000'
      barStyle={{ backgroundColor: 'white'}}
      labeled={false}
    >
      <UserTab.Screen 
        name="HomeTab" 
        component={ Home }
        options={{
          tabBarAccessibilityLabel: "Página inicial",
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={color} 
            />
          ),
        }}
      />

      <UserTab.Screen 
        name="Search" 
        component={ Search } 
        options={{
          tabBarAccessibilityLabel: "Procurar",
          tabBarLabel: 'Procurar',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'search' : 'md-search-outline'}
              size={24} 
              color={color} 
            />
          ),
        }}
      />

      <UserTab.Screen 
        name="LiveLocalization" 
        component={ LiveLocalization } 
        options={{
          tabBarAccessibilityLabel: "Localização",
          tabBarLabel: 'Localização',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name={focused ? 'map-marker' : 'map-marker-outline'}
              size={24}
              color={color} 
            />
          ),
        }}
      />
 
      <UserTab.Screen 
        name="Activity" 
        component={ Activity } 
        options={{
          tabBarAccessibilityLabel: "Atividade e notificações",
          tabBarLabel: 'Atividade',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'heart' : 'heart-outline'}
              size={24} 
              color={color} 
            />
          ),
        }}
      />

      <UserTab.Screen 
        name="Setting" 
        component={ Setting } 
        options={{
          tabBarAccessibilityLabel: "Configurações",
          tabBarLabel: 'Configuração',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'md-settings-sharp' : 'md-settings-outline'}
              size={24} 
              color={color} 
            />
          ),
        }}
      />
    </UserTab.Navigator>
  )
}

function AdminBottomTab(){
  return(
    <AdminTab.Navigator
      initialRouteName='AdminHomeTab'
      backBehavior='history'
      shifting={true}
      activeColor='#000'
      barStyle={{ backgroundColor: 'white'}}
      labeled={false}
    >
      <AdminTab.Screen 
        name="AdminHomeTab" 
        component={ Admin }
        options={{
          tabBarLabel: 'Inicio',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons
              name={focused ? 'home' : 'home-outline'}
              size={24}
              color={color} 
            />
          ),
        }}
      />

      <AdminTab.Screen 
        name="UserList" 
        component={ UserList } 
        options={{
          tabBarLabel: 'Usuários',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'person' : 'person-outline'}
              size={24} 
              color={color} 
            />
          ),
        }}
      />

      <AdminTab.Screen 
        name="LiveLocalization" 
        component={ LiveLocalization } 
        options={{
          tabBarLabel: 'Localização',
          tabBarIcon: ({ color, focused }) => (
            <MaterialCommunityIcons 
              name={focused ? 'map-marker' : 'map-marker-outline'}
              size={24}
              color={color} 
            />
          ),
        }}
      />
 
      <AdminTab.Screen 
        name="AdviceList" 
        component={ AdminAdviceTopTab } 
        options={{
          tabBarLabel: 'Avisos',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'alert-circle' : 'alert-circle-outline'}
              size={25} 
              color={color} 
            />
          ),
        }}
      />

      <AdminTab.Screen 
        name="Setting" 
        component={ Setting } 
        options={{
          tabBarLabel: 'Configuração',
          tabBarIcon: ({ color, focused }) => (
            <Ionicons 
              name={focused ? 'md-settings-sharp' : 'md-settings-outline'}
              size={24} 
              color={color} 
            />
          ),
        }}
      />
    </AdminTab.Navigator>
  )
}

const LoginScreen = () => {
  return (
    <LoginStack.Navigator initialRouteName="Login" screenOptions={{ headerShown: false }} >
      <LoginStack.Screen name="Login" component={Login} />
      <LoginStack.Screen name="SignIn" component={SignIn} />
    </LoginStack.Navigator> 
  )
}

const UserScreen = () => {
  return (
    <UserStack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
      <UserStack.Screen name="Home" component={UserBottomTab} />
      <UserStack.Screen name="SignIn" component={SignIn} />
      <UserStack.Screen name="Search" component={Search} />
      <UserStack.Screen name="Localization" component={Localization} />
      <UserStack.Screen name="Contact" component={Contact} />
      <UserStack.Screen name="Advice" component={Advice} />
      <UserStack.Screen name="MarkAdvice" component={MarkAdvice} />
      <UserStack.Screen name="SearchContact" component={SearchContact} />
      <UserStack.Screen name="AdviceProfile" component={AdviceProfile} />
      <UserStack.Screen name="AdviceEditProfile" component={AdviceEditProfile}/>

      {/* <UserStack.Screen name="UserProfile" component={UserProfile}/> */}
      {/* <UserStack.Screen name="UserEditProfile" component={UserEditProfile}/> */}
    </UserStack.Navigator> 
  )
}

const AdminScreen = () => {
  return (
    <AdminStack.Navigator initialRouteName="Admin" screenOptions={{ headerShown: false }} >
      <AdminStack.Screen name="Admin" component={AdminBottomTab}/>
      {/* <AdminStack.Screen name="UserList" component={UserList}/> */}
      <AdminStack.Screen name="UserProfile" component={UserProfile}/>
      <AdminStack.Screen name="UserEditProfile" component={UserEditProfile}/>
      <AdminStack.Screen name="UserCreateProfile" component={UserCreateProfile}/>
      <AdminStack.Screen name="AdviceList" component={AdminAdviceTopTab} />
      <AdminStack.Screen name="AdviceProfile" component={AdviceProfile}/>
      <AdminStack.Screen name="AdviceEditProfile" component={AdviceEditProfile}/>
      <AdminStack.Screen name="RequestList" component={AdminRequestTopTab}/>

      <AdminStack.Screen name="Search" component={Search} />
      <AdminStack.Screen name="Localization" component={Localization} />
      <AdminStack.Screen name="Contact" component={Contact} />
      <AdminStack.Screen name="Advice" component={Advice} />
      <AdminStack.Screen name="MarkAdvice" component={MarkAdvice} />
      <AdminStack.Screen name="SearchContact" component={SearchContact} />
    </AdminStack.Navigator>
  )
}
const Drawer = createDrawerNavigator();


export default function Main() {
  return (
    <Drawer.Navigator initialRouteName="LoginScreen" screenOptions={{headerShown: false}}>
      <Drawer.Screen name="LoginScreen" component={LoginScreen} />
      <Drawer.Screen name="UserScreen" component={UserScreen} />
      <Drawer.Screen name="AdminScreen" component={AdminScreen} />
    </Drawer.Navigator>
  );
}
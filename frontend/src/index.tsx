import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import SignIn from './screens/SignIn';
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

const UserTab = createMaterialBottomTabNavigator();
const UserStack = createStackNavigator();

const AdminTab = createMaterialBottomTabNavigator();
const AdminStack = createStackNavigator();

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
        name="Search" 
        component={ Search } 
        options={{
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
        name="Activity" 
        component={ Activity } 
        options={{
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
    </UserStack.Navigator> 
  )
};

const AdminScreen = () => {
  return (
    <AdminStack.Navigator initialRouteName="Admin" screenOptions={{ headerShown: false }} >
      <AdminStack.Screen name="Admin" component={AdminBottomTab}/>
      <AdminStack.Screen name="Search" component={Search} />
      <AdminStack.Screen name="Localization" component={Localization} />
      <AdminStack.Screen name="Contact" component={Contact} />
      <AdminStack.Screen name="Advice" component={Advice} />
      <AdminStack.Screen name="MarkAdvice" component={MarkAdvice} />
      <AdminStack.Screen name="SearchContact" component={SearchContact} />
    </AdminStack.Navigator>
  )
}

export {UserScreen, AdminScreen};
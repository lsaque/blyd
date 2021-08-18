import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { MaterialCommunityIcons, Ionicons } from '@expo/vector-icons';

import SignIn from './screens/SignIn';

import HomeScreen from './screens/Home';
import SearchScreen from './screens/Search';
import LocalizationScreen from './screens/Localization';
import ActivityScreen from './screens/Activity';
import SettingScreen from './screens/Setting';

const Stack = createStackNavigator();
const Tab = createMaterialBottomTabNavigator();

function BottomTab(){
  return(
    <Tab.Navigator
      initialRouteName='HomeTab'
      backBehavior='history'
      shifting={true}
      activeColor='#000'
      barStyle={{ backgroundColor: 'white'}}
      labeled={true}
    >
      <Tab.Screen 
        name="HomeTab" 
        component={ HomeScreen }
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

      <Tab.Screen 
        name="Search" 
        component={ SearchScreen } 
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

      <Tab.Screen 
        name="Localization" 
        component={ LocalizationScreen } 
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
 
      <Tab.Screen 
        name="Activity" 
        component={ ActivityScreen } 
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

      <Tab.Screen 
        name="Setting" 
        component={ SettingScreen } 
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

    </Tab.Navigator>
    
  )
}

export default function Main() {

  // const {Navigator, Screen} = Stack;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={BottomTab} />
      </Stack.Navigator> 
    </NavigationContainer>
  )
};
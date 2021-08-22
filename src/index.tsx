import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
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

const Tab = createMaterialBottomTabNavigator();

function BottomTab(){
  return(
    <Tab.Navigator
      initialRouteName='HomeTab'
      backBehavior='history'
      shifting={true}
      activeColor='#000'
      barStyle={{ backgroundColor: 'white'}}
      labeled={false}
    >
      <Tab.Screen 
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

      <Tab.Screen 
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

      <Tab.Screen 
        name="Localization" 
        component={ Localization } 
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

      <Tab.Screen 
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
    </Tab.Navigator>
  )
}

const Stack = createStackNavigator();

export default function Main() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false }} >
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="Home" component={BottomTab} />
        <Stack.Screen name="Search" component={Search} />
        <Stack.Screen name="Contact" component={Contact} />
        <Stack.Screen name="Advice" component={Advice} />
        
        {/* <Stack.Screen name="Setting" component={Setting} /> */}
      </Stack.Navigator> 
    </NavigationContainer>
  )
};
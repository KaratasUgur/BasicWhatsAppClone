import React from 'react';
import {Text, View} from 'react-native';

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import Octicons from 'react-native-vector-icons/Octicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import Ionicons from 'react-native-vector-icons/Ionicons';

import MainTabScreen from '../Screens/MainTabScreen';
import ChatRoomWithUserScreen from '../Screens/ChatRoomWithUserScreen';
import ContactsScreen from '../Screens/ContactScreen';

const Stack = createStackNavigator();

const MainScreen = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: '#0C6157',
            shadowOpacity: 0,
            elevation: 0,
          },
          headerTintColor: '#fff',
          headerTitleAlign: 'left',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}>
        <Stack.Screen
          name="Home"
          component={MainTabScreen}
          options={{
            title: 'WhatsApp',
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  width: 60,
                  justifyContent: 'space-between',
                  marginRight: 10,
                }}>
                <Octicons name="search" size={24} color="white" />
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={24}
                  color="white"
                />
              </View>
            ),
          }}
        />
        <Stack.Screen
          name="ChatRoomWithUser"
          component={ChatRoomWithUserScreen}
          options={({route}) => ({
            title: route.params.name,
            headerRight: () => (
              <View
                style={{
                  flexDirection: 'row',
                  width: 100,
                  justifyContent: 'space-between',
                  marginRight: 10,
                }}>
                <MaterialIcons name="call" size={22} color="white" />
                <Ionicons name="videocam" size={22} color="white" />
                <MaterialCommunityIcons
                  name="dots-vertical"
                  size={22}
                  color="white"
                />
              </View>
            ),
          })}
        />
        <Stack.Screen name="Contacts" component={ContactsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default MainScreen;

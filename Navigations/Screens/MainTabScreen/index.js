import React from 'react';

import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CameraScreen from '../CameraScreen';
import ChatsRoomScreen from '../ChatsRoomScreen';
import StatusScreen from '../StatusScreen';
import CallsScreen from '../CallsScreen';
import Fontisto from 'react-native-vector-icons/Fontisto';

const MainTab = createMaterialTopTabNavigator();

const MainTabScreen = () => {
  return (
    <MainTab.Navigator
      initialRouteName="Sohbetler"
      tabBarOptions={{
        activeTintColor: '#fff',
        style: {
          backgroundColor: '#0C6157',
        },
        indicatorStyle: {
          backgroundColor: '#fff',
          height: 4,
        },
        labelStyle: {
          fontWeight: 'bold',
          fontSize: 11,
        },
        showIcon: true,
      }}>
      <MainTab.Screen
        name="Camera"
        component={CameraScreen}
        options={{
          tabBarIcon: ({color}) => (
            <Fontisto name="camera" size={18} color={color} />
          ),
          tabBarLabel: () => null,
        }}
      />
      <MainTab.Screen name="Sohbetler" component={ChatsRoomScreen} />
      <MainTab.Screen name="Durum" component={StatusScreen} />
      <MainTab.Screen name="Aramalar" component={CallsScreen} />
    </MainTab.Navigator>
  );
};

export default MainTabScreen;

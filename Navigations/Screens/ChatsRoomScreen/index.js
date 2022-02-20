import React from 'react';
import {Text, View, FlatList} from 'react-native';

import chatRoomsDammyData from '../../../data/ChatRoomsDammy';
import ChatListItem from '../../../Components/ChatListItem';
import NewMessageButton from '../../../Components/NewMessageButton';

const ChatsRoomScreen = () => {
  return (
    <View>
      <FlatList
        data={chatRoomsDammyData}
        renderItem={({item}) => <ChatListItem chatRoom={item} />}
        keyExtractor={item => item.id}
      />
      <NewMessageButton />
    </View>
  );
};

export default ChatsRoomScreen;

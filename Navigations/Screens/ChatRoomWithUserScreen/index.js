import React from 'react';
import {ImageBackground, FlatList} from 'react-native';
import {useRoute} from '@react-navigation/native';
import chatRoomData from '../../../data/Chats';
import ChatMessage from '../../../Components/ChatMessage';
import BG from '../../../Assests/images/BG.png';
import InputMessage from '../../../Components/InputMessage';

const ChatRoomWithUserScreen = () => {
  const route = useRoute();

  return (
    <ImageBackground style={{width: '100%', height: '100%'}} source={BG}>
      <FlatList
        data={chatRoomData.messages}
        renderItem={({item}) => <ChatMessage message={item} />}
        keyExtractor={item => item.id}
        inverted
      />
      <InputMessage />
    </ImageBackground>
  );
};

export default ChatRoomWithUserScreen;

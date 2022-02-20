import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const ChatListItem = ({chatRoom}) => {
  const user = chatRoom.users[1];
  const navigation = useNavigation();

  const onPress = () => {
    navigation.navigate('ChatRoomWithUser', {
      id: chatRoom.id,
      name: user.name,
    });
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{uri: user.imageUri}} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text numberOfLines={1} style={styles.lastMessage}>
              {chatRoom.lastMessage.content}
            </Text>
          </View>
        </View>
        <Text style={styles.time}>
          {moment(chatRoom.lastMessage.createdAt).format('DD/MM/YYYY')}
        </Text>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ChatListItem;

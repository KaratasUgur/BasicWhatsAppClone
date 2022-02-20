import React from 'react';
import {Text, View} from 'react-native';
import moment from 'moment';
import styles from './styles';

const ChatMessage = ({message}) => {
  const isMyMessage = () => {
    return message.user.id === 'u1';
  };

  return (
    <View style={styles.container}>
      <View
        style={[
          styles.messageBox,
          {
            backgroundColor: isMyMessage() ? '#DCF8C5' : 'white',
            marginRight: isMyMessage() ? 0 : 50,
            marginLeft: isMyMessage() ? 50 : 0,
          },
        ]}>
        <Text style={styles.message}>{message.content}</Text>
        <Text style={styles.time}>{moment(message.createdAt).fromNow()}</Text>
      </View>
    </View>
  );
};

export default ChatMessage;

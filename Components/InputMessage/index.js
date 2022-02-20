import React, {useState} from 'react';
import {TouchableOpacity, TextInput, View} from 'react-native';
import styles from './styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Fontisto from 'react-native-vector-icons/Fontisto';
import Entypo from 'react-native-vector-icons/Entypo';

const InputMessage = () => {
  const [message, setMessage] = useState('');

  const onMicrophonePressed = () => {
    console.warn('Microphone');
  };

  const onSendMessagePressed = () => {
    console.warn(message);
    setMessage('');
  };

  const onPress = () => {
    if (!message) {
      onMicrophonePressed();
    } else {
      onSendMessagePressed();
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.mainContainer}>
        <Fontisto name="laughing" size={24} color="gray" style={styles.icon} />
        <TextInput
          multiline
          style={styles.textInput}
          value={message}
          onChangeText={text => setMessage(text)}
          placeholder="Mesaj giriniz"
        />
        <Entypo name="attachment" size={24} color="gray" style={styles.icon} />
        {!message && (
          <Fontisto name="camera" size={24} color="gray" style={styles.icon} />
        )}
      </View>
      <TouchableOpacity onPress={onPress}>
        <View style={styles.buttonContainer}>
          {!message ? (
            <MaterialCommunityIcons name="microphone" size={28} color="white" />
          ) : (
            <MaterialCommunityIcons name="send" size={28} color="white" />
          )}
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default InputMessage;

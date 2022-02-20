import React from 'react';
import {Text, View, Image, TouchableWithoutFeedback} from 'react-native';
import styles from './styles';
import moment from 'moment';
import {useNavigation} from '@react-navigation/native';

const ContactListItem = ({user}) => {
  const navigation = useNavigation();

  const onPress = () => {
    //
  };

  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={styles.container}>
        <View style={styles.leftContainer}>
          <Image source={{uri: user.imageUri}} style={styles.avatar} />
          <View style={styles.midContainer}>
            <Text style={styles.name}>{user.name}</Text>
            <Text style={styles.status}>{user.status}</Text>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default ContactListItem;

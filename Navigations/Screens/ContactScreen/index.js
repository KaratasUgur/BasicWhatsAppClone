import React from 'react';
import {Text, View, FlatList} from 'react-native';

import users from '../../../data/Users';
import ContactListItem from '../../../Components/ContactListItem';

const ContactsScreen = () => {
  return (
    <View>
      <FlatList
        data={users}
        renderItem={({item}) => <ContactListItem user={item} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

export default ContactsScreen;

import React from 'react';
import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    width: '100%',
    justifyContent: 'space-between',
    padding: 10,
  },
  leftContainer: {
    flexDirection: 'row',
    width: '75%',
  },
  midContainer: {
    justifyContent: 'space-around',
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    marginRight: 5,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  lastMessage: {
    fontSize: 16,
    color: 'grey',
  },
  time: {
    fontSize: 14,
    color: 'grey',
  },
});

export default styles;

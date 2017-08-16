import React from 'react';
import {View, Text, Button, Alert} from 'react-native';
import reactify from 'react-native-reactify';

function onPress(e) {
  Alert.alert('World');
}

const helloWorld = {
  type: 'View',
  style: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#eff'
  },
  children: {
    type: 'Button',
    title: 'Hello',
    onPress,
    style: {
      accessibilityLabel: 'text',
      fontSize: 40,
      color: '#444'
    }
  }
};

export default class App extends React.Component {
  render() {
    return reactify(helloWorld, {View, Text, Button});
  }
}

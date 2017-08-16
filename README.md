# Reactify

Create React Native interfaces using JSON format.

## Install

```sh
npm install react-native-reactify --save
```

## Usage

```js
import React from 'react';
import {View, Button, Alert} from 'react-native';
import reactify from 'react-native-reactify';

/**
 * It will be executed when the "Hello" button is pressed.
 *
 * @param {Event} e
 */
function onPress(e) {
  Alert.alert('World');
}

/**
 * Object description of a React component.
 */
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
      fontSize: 40,
      color: '#444'
    }
  }
};

export default class App extends React.Component {
  render() {
    return reactify(helloWorld, {View, Button});
  }
}

```
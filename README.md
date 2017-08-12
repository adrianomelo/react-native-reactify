# Reactify

Create React Native interfaces using JSON format.

## Install

```sh
npm install react-native-reactify --save
```

## Usage

```js
import React from 'react';
import {View, Text} from 'react-native';
import reactify from 'react-native-reactify';

const helloWorld = {
  type: 'View',
  props: {
    children: {
      type: 'Text',
      props: {
        children: 'Hello World',
        style: {
          fontSize: 40,
          color: '#444'
        }
      }
    },
    style: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#eff'
    }
  }
};

export default class App extends React.Component {
  render() {
    return reactify(helloWorld, {types: {View, Text}};
  }
}
```
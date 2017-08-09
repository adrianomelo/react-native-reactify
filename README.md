# React Native MetaUi

Create React Native interfaces using JSON format.

## Install

```sh
npm install react-native-metaui --save
```

## Usage

```js
import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';
import createComponent from 'react-native-metaui';

export default class App extends React.Component {
  render() {
    const test = {
      type: 'Text',
      props: {
        children: 'Hello, world!'
      }
    };
    const component = createComponent(test);
    return (
      <View style={styles.container}>
        {component}
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
```
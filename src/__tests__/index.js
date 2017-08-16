import 'react-native';
import React from 'react';
import {
  Text,
  View
} from 'react-native';
import createComponent from '../create-component';
import renderer from 'react-test-renderer';

test('renders single <Text />', () => {
  const text = {
    type: 'Text',
    children: 'Hello World'
  };
  const component = createComponent(text, {Text});
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders <View /> with <Text />', () => {
  const text = {
    type: 'View',
    children: {
      type: 'Text',
      children: 'Hello World'
    }
  };
  const component = createComponent(text, {Text, View});
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders <View /> with list of <Text />', () => {
  const text = {
    type: 'View',
    children: [
      {
        type: 'Text',
        key: 0,
        children: 'Hello World'
      }
    ]
  };
  const component = createComponent(text, {Text, View});
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders <View /> with null children', () => {
  const text = {
    type: 'View',
    children: null
  };
  const component = createComponent(text, {Text, View});
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test('returns string when input is string', () => {
  const text = '';
  const component = createComponent(text, {});
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test('empty list -> empty list', () => {
  const component = createComponent([], {});
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test('undefined -> null', () => {
  const component = createComponent(undefined, {});
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test('throws exeception when type is not defined', () => {
  expect(() => createComponent({}, {})).toThrow(Error);
});

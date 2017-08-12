import 'react-native';
import React from 'react';
import {
  Text,
  View
} from 'react-native';
import createComponent from '../create-component';
import renderer from 'react-test-renderer';

test('renders single <Text />', () => {
  const types = {Text};
  const text = {
    type: 'Text',
    props: {
      children: 'Hello World'
    }
  };
  const component = createComponent(text, {types});
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders <View /> with <Text />', () => {
  const types = {Text, View};
  const text = {
    type: 'View',
    props: {
      children: {
        type: 'Text',
        props: {
          children: 'Hello World'
        }
      }
    }
  };
  const component = createComponent(text, {types});
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders <View /> with list of <Text />', () => {
  const types = {Text, View};
  const text = {
    type: 'View',
    props: {
      children: [
        {
          type: 'Text',
          props: {
            key: 0,
            children: 'Hello World'
          }
        }
      ]
    }
  };
  const component = createComponent(text, {types});
  const tree = renderer.create(component).toJSON();
  expect(tree).toMatchSnapshot();
});

test('renders <View /> with null children', () => {
  const types = {Text, View};
  const text = {
    type: 'View',
    props: {
      children: null
    }
  };
  const component = createComponent(text, {types});
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

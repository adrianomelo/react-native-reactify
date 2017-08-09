import {
  ActivityIndicator,
  Button,
  DatePickerIOS,
  DrawerLayoutAndroid,
  FlatList,
  Image,
  KeyboardAvoidingView,
  ListView,
  Modal,
  NavigatorIOS,
  Picker,
  PickerIOS,
  ProgressBarAndroid,
  ProgressViewIOS,
  RefreshControl,
  ScrollView,
  SectionList,
  SegmentedControlIOS,
  Slider,
  SnapshotViewIOS,
  StatusBar,
  Switch,
  TabBarIOS,
  Text,
  TextInput,
  ToolbarAndroid,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewPagerAndroid,
  VirtualizedList,
  WebView
} from 'react-native';
import createComponent from './create-component';

const builtInTypes = {
  ActivityIndicator,
  Button,
  DatePickerIOS,
  DrawerLayoutAndroid,
  FlatList,
  Image,
  KeyboardAvoidingView,
  ListView,
  Modal,
  NavigatorIOS,
  Picker,
  PickerIOS,
  ProgressBarAndroid,
  ProgressViewIOS,
  RefreshControl,
  ScrollView,
  SectionList,
  SegmentedControlIOS,
  Slider,
  SnapshotViewIOS,
  StatusBar,
  Switch,
  TabBarIOS,
  'TabBarIOS.Item': TabBarIOS.Item,
  Text,
  TextInput,
  ToolbarAndroid,
  TouchableHighlight,
  TouchableNativeFeedback,
  TouchableOpacity,
  TouchableWithoutFeedback,
  View,
  ViewPagerAndroid,
  VirtualizedList,
  WebView
};

function createReactNativeComponent(json, options) {
  const newOptions = {
    types,
    ...options
  };
  return createComponent(json, newOptions);
}

export default createReactNativeComponent;

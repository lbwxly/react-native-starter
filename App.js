/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  Text,
  View,
  FlatList,
  TouchableOpacity
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import styles from './style.js';
import appStyles from './app.style.js';
import LayoutScreen from './samples/layout';
import NativeCallScreen from './samples/nativeCall';
import NativeEventScreen from './samples/nativeEvent';
import NativeUIComponentScreen from './samples/nativeUIComponent';
import FlexLayout from './samples/layout/flexLayout';
import AbsoluteLayout from './samples/layout/absoluteLayout';
import Menu from './components/menuComponent';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' +
    'Cmd+D or shake for dev menu',
  android: 'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class MainScreen extends Component {
  // config the navigation for this view. see https://reactnavigation.org/docs/headers.html for detail
  static navigationOptions = {
    title: 'Home',
  };
  constructor(props){
    super(props);
    this.sampleItems = [
      {key:"1",title:"Layout",screenName:'Layout'},
      {key:"2",title:"Native Call",screenName:'NativeCall'},
      {key:"3",title:"Native Event", screenName:'NativeEvent'},
      {key:"4",title:"Native UI Component",screenName:'NativeUIComponent'},
    ];
  }

  render() {
    return (
      <View style={styles.container}>
        <Text style={appStyles.welcome}>
          Welcome to React Native Sample!
        </Text>
        <Menu style={appStyles.menu} items={this.sampleItems} itemSelected={(item)=>{
          this.props.navigation.navigate(item.screenName);
        }}/>
      </View>
    );
  }
}

let rootView = StackNavigator({
  Home:{
    screen:MainScreen
  },
  Layout:{
    screen:LayoutScreen
  },
 NativeCall:{
   screen:NativeCallScreen
 },
 NativeEvent:{
   screen:NativeEventScreen
 },
 NativeUIComponent:{
   screen:NativeUIComponentScreen
 },
 FlexLayout:{
   screen:FlexLayout
 },
 AbsoluteLayout:{
   screen:AbsoluteLayout
 }
});

export default rootView;
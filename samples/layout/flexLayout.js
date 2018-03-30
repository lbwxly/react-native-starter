import React, { Component } from 'react';
import {View} from 'react-native';

export default class FlexLayoutScreen extends Component {
  // Flex layout guide:
  // https://facebook.github.io/react-native/docs/height-and-width.html
  // https://facebook.github.io/react-native/docs/flexbox.html
  // https://facebook.github.io/react-native/docs/layout-props.html
  render(){
    return (
      <View style={{flex:1,backgroundColor:'green',flexDirection:'column',justifyContent:'flex-start',alignItems:'stretch'}}>
        <View style={{height:100,backgroundColor:'black'}}/>
        <View style={{height:200,backgroundColor:'white'}}/>
      </View>
    );
  }
}
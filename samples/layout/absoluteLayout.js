import React, { Component } from 'react';
import {View} from 'react-native';

export default class AbsoluteLayoutScreen extends Component {
  //https://facebook.github.io/react-native/docs/layout-props.html#position
  render(){
    return (
      <View style={{flex:1,flexDirection:'column',justifyContent:'center'}}>
        <View style={{height:200,backgroundColor:'green',flexDirection:'column',justifyContent:'flex-start'}}>
          <View style={{position:'absolute',left:100,top:-20,width:100,height:100,backgroundColor:'black'}}>

          </View>
          <View style={{height:100,backgroundColor:'yellow'}}>
          
          </View>
        </View>
      </View>
    );
  }
}
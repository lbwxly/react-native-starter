import React, { Component } from 'react';
import { View,Text, FlatList } from 'react-native';
import appStyles from '../app.style.js';
import Menu from '../components/menuComponent';

export default class LayoutSampleScreen extends Component {
  static navigationOptions = {
    title: 'Layout',
  };

  constructor(props){
    super(props);
    this.layoutItems = 
    [
      {key:"1",title:"Flex Layout",screenName:'FlexLayout'},
      {key:"2",title:"Absolute Layout",screenName:'AbsoluteLayout'},
    ];
  }
  render(){
    return <Menu style={appStyles.menu} items={this.layoutItems} itemSelected={(item)=>{
      this.props.navigation.navigate(item.screenName);
    }}/>
  }
}
import React, { Component } from 'react';
import { View,Text, FlatList, TouchableOpacity } from 'react-native';
import menuStyles from './menuComponent.style.js';

class SeparatorComponent extends Component{
  render(){
    return <View style={{height:1,backgroundColor:'lightgray'}}></View>
  }
}

export default class MenuComponent extends Component {
  constructor(props){
    super(props);
  }

  render(){
    return <FlatList style={[{flex:1},this.props.style]} data={this.props.items} renderItem={({item}) => {
      return (
        <TouchableOpacity style={menuStyles.menuItem} onPress={(e)=>{
          this.props.itemSelected(item);
        }}>
           <Text>{item.title}</Text> 
        </TouchableOpacity>
      );
   }} ItemSeparatorComponent={SeparatorComponent}/>
  }
}
import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, Slider,Image } from "react-native";

import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import AddEntry from "./components/AddEntry";
import SwitchInput from './components/SwitchInput'
export default class App extends Component {
  // componentDidMount() {

  // }
  state = {
    value: 0,
  };
  changeValue = (value)=>{
    this.setState(()=>({
      value
    }))
  }
  render() {
    return (
      <View style={styles.container}>
        {/* <AddEntry /> */}
        <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLfNpes0FQpqZIx4vBmrzLUYj6wNaiN5oTg&usqp=CAU'}} style={styles.image}/>
        <SwitchInput/>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
     flex:1,
     alignItems:'center',
     justifyContent: 'center',
     backgroundColor:'#F8F8F8'


    },
    image:{
      width:200,
      height: 200,
      padding:40
      
  }
  
});
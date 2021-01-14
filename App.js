import { StatusBar } from "expo-status-bar";

import { StyleSheet, Text, View, Slider,Image } from "react-native";

import React, { Component } from "react";
import { Ionicons } from "@expo/vector-icons";
import AddEntry from "./components/AddEntry";
import SwitchInput from './components/SwitchInput'
import {createStore} from 'redux'
import { Provider } from "react-redux";
import reducer from './reducer'
import Historty from './components/History'
export default function App(){
    return (
      <Provider store={createStore(reducer)}>
      <View style={styles.container}>
        
        {/* <AddEntry /> */}
        <Historty/>
        {/* <Image source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeLfNpes0FQpqZIx4vBmrzLUYj6wNaiN5oTg&usqp=CAU'}} style={styles.image}/>
        <SwitchInput/> */}
       
      </View>
      </Provider>
    );
  }

const styles = StyleSheet.create({
  container: {
     flex:1,
    },
   
  
});
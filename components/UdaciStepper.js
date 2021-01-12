import React, { Component } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { FontAwesome, Entypo } from '@expo/vector-icons'
import { blue, red } from "../utils/color";
export default function UdaciStepper({max,unit,value,OnDecrement,OnIncrement}){
  return (
    <View>
        <TouchableOpacity onPress={OnDecrement}>
        <FontAwesome name="minus" color={blue} size={30}/>
        </TouchableOpacity>
        <TouchableOpacity onPress={OnIncrement}>
        <Entypo name="plus" color={red}  size={30}/>
        </TouchableOpacity>
     <Text>value : {value}</Text>
     <Text>{unit}</Text>
    </View>
  );
}

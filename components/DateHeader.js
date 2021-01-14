import React, { Component } from "react";
import { View, Text } from "react-native";
import { purple } from "../utils/color";
const DateHeader = ({ date }) => {
  return (
    <View style={{paddingTop:10}}>
      <Text style={{color:purple,fontSize: 24}}>{date}</Text>
    </View>
  );
};

export default DateHeader;

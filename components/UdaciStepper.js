import React, { Component } from "react";
import { View, Text, TouchableOpacity, StyleSheet,Platform } from "react-native";
import { FontAwesome, Entypo } from "@expo/vector-icons";
import { blue, red, white, purple } from "../utils/color";
export default function UdaciStepper({
  max,
  unit,
  value,
  onDecrement,
  onIncrement,
}) {
  return (
    <View style={[styles.stepper, { justifyContent: "space-between" }]}>
      <View style={[styles.stepper]}>
        <TouchableOpacity onPress={onDecrement} style={Platform.OS ==='ios' ? styles.iosBtn : styles.andriodBtn}>
          {Platform.OS==='ios'? <Entypo name="minus" color={Platform.OS ==='ios' ? blue: white} size={30} /> : 
          <FontAwesome name="minus" color={Platform.OS ==='ios' ? blue: white} size={30} />}
        </TouchableOpacity>
        <TouchableOpacity onPress={onIncrement} style={Platform.OS ==='ios' ? styles.iosBtn : styles.andriodBtn}>
        {Platform.OS==='ios'? <Entypo name="plus" color={Platform.OS ==='ios' ? blue: white} size={30} /> :<FontAwesome name="plus" color={Platform.OS ==='ios' ? blue: white} size={30} />}
        </TouchableOpacity>
      </View>
      <View style={styles.units}>
        <Text style={{fontSize:24,textAlign:'center'}}>{value} {"  "}</Text>
        <Text style={{fontSize:18,color:'grey'}}>{unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  stepper: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  iosBtn :{
    color:white,
    borderRadius:3,
    borderWidth:1,
    paddingLeft:20,
    paddingRight:20,
    marginHorizontal:2,
  },
  andriodBtn:{
    color:white,
    borderRadius:3,
    margin:5,
    padding:10,
    backgroundColor:purple,
  },
  units:{
    width:85,
    justifyContent: 'center',
    alignItems:'center'
}
});

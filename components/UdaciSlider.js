import React, { Component } from "react";
import { View, Text, Slider, StyleSheet } from "react-native";
export default function UdaciSlider({ max, unit, step, value, onChange }) {
  return (
    <View style={[styles.slider, { justifyContent: "space-between" }]}>
      <View style={styles.slider}>
        <Slider
          style={{ width: "100%", height: 40 }}
          minimumValue={0}
          maximumValue={max}
          step={step}
          minimumTrackTintColor="red"
          maximumTrackTintColor="blue"
          value={value}
          onValueChange={onChange}
        />
      </View>
      <View style={styles.units}>
        <Text style={{fontSize:24,textAlign:'center'}}>
          {value}
          {"  "}
        </Text>
        <Text style={{fontSize:18,color:'grey'}}>{unit}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  slider: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
  },
  units:{
      width:85,
      justifyContent: 'center',
      alignItems:'center'
  }
});

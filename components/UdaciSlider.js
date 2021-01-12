import React, { Component } from 'react'
import { View,Text ,Slider} from 'react-native'
export default function UdaciSlider({max,unit,step,value,onChange}){
    
        return (
        <View>
            <Slider
            style={{width: '100%', height: 40}}
            minimumValue={0}
            maximumValue={max}
            step={step}
            minimumTrackTintColor="red"
            maximumTrackTintColor="blue"
            value={value}
            onValueChange={onChange}
            />  
            <Text>value : {value}</Text>
            <Text>{unit}</Text>
        </View>
        )
    }


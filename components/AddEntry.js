import React, { Component } from 'react'
import { View,Text } from 'react-native'
import { Ionicons } from '@expo/vector-icons';
import {getMetricMetaInfo} from '../utils/helper'
export default class AddEntry extends Component {
    state = {
        run: 0,
        bike: 0,
        swim: 0,
        sleep: 0,
        eat: 0,
      }
      increment = (metric) => {
          
        const { max, step } = getMetricMetaInfo(metric)
        console.log(max)
        console.log(step)
        console.log()
        this.setState((state) => {
          const count = state[metric] + step
    
          return {
            ...state,
            [metric]: count > max ? max : count,
          }
        })
    }
    decrement = (metric) => {
        this.setState((state) => {
          const count = state[metric] - getMetricMetaInfo(metric).step
    
          return {
            ...state,
            [metric]: count < 0 ? 0 : count,
      }
    })
  }

    render() {
        return (
            <View>
                {getMetricMetaInfo('bike').getIcon()}
                {getMetricMetaInfo('run').getIcon()}
            </View>
        )
    }
}
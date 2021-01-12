import React, { Component } from 'react'
import {View, Text,Switch, TextInput,StyleSheet,Image} from 'react-native'
import { red } from '../utils/color'
export default class SwitchInput extends Component {
    state ={
        input:"asif@gmai.com",
        showInput:false,
    }
    handletoggle = ()=>{
        this.setState({
            showInput:true
        })
    }
    handleInput = (value)=>{
        this.setState({
            input:value
        })
    }
    render() {
        return (
            <View>
                
                <Switch
                value={this.state.showInput}
                onChange={this.handletoggle}
                />
                
                {this.state.showInput === true ?<TextInput style={styles.Input} value={this.state.input}
                onChange={this.handleInput}/>
            :
            null}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    
    Input: {
      width: 200,
      height: 44,
      borderWidth: 1,
      borderColor:'red',
      

    },
    
  });
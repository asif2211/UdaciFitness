import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity,Platform } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { getMetricMetaInfo, timeToString ,getDailyReminderValue} from "../utils/helper";
import UdaciSlider from "./UdaciSlider";
import UdaciStepper from "./UdaciStepper";
import DateHeader from "./DateHeader";
import TextButton from './TextButton';
import { submitEntry, removeEntry } from '../utils/api'
import {addEntry} from '../actions'
import { connect } from "react-redux";
import { white, purple } from "../utils/color";
function SubmitBtn({ onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={Platform.OS === 'ios'? styles.iosButtton : styles.androidBtn }>
      <Text style={styles.submitBtnText}>SUBMIT</Text>
    </TouchableOpacity>
  );
}
class AddEntry extends Component {
  state = {
    run: 0,
    bike: 10,
    swim: 0,
    sleep: 0,
    eat: 5,
  };
  slide = (metric, value) => {
    this.setState(() => ({
      [metric]: value
    }))
  }
  increment = (metric) => {
    const { max, step } = getMetricMetaInfo(metric);
    this.setState((state) => {
      const count = state[metric] + step;

      return {
        ...state,
        [metric]: count > max ? max : count,
      };
    });
  };
  decrement = (metric) => {
    this.setState((state) => {
      const count = state[metric] - getMetricMetaInfo(metric).step;

      return {
        ...state,
        [metric]: count < 0 ? 0 : count,
      };
    });
  };

  submit = () => {
    const key = timeToString();
    const entry = [this.state];
    alert([key])
    alert(entry)
    // Update Redux
    this.props.dispatch(addEntry({
      [key]:entry
    }))

    this.setState(() => ({ run: 0, bike: 0, swim: 0, sleep: 0, eat: 0 }));

    // Navigate to home

    // Save to "DB"
    submitEntry({ key, entry })
    // Clear local notification
  };
  reset = () => {
    
    const key = timeToString();

    // Update Redux
    this.props.dispatch(addEntry({
      [key]: getDailyReminderValue()
    }))
    // Route to Home
    removeEntry(key)
    // Update "DB"
  }
  
  render() {
    const key = timeToString();
    const entry = this.state;
    
    const metaInfo = getMetricMetaInfo();
    if (this.props.alreadyLogged) {
      return (
        <View style={styles.center}>
          <Ionicons
            name={'ios-happy-outline'}
            size={100}
          />
          <Text>You already logged your information for today.</Text>
          <TextButton onPress={this.reset}>
            Reset
          </TextButton>
          
        </View>
      )
      
    }

    return (
    <View style={styles.container}>
        <DateHeader date={new Date().toLocaleDateString()} />
        {/* <Text>{JSON.stringify({
        [key]: this.state
      })}</Text> */}
        {Object.keys(metaInfo).map((key) => {
          const { getIcon, type, ...rest } = metaInfo[key];
          const value = this.state[key];
          return (
            <View key={key} style={styles.row}>
              {getIcon()}
              {type === "slider" ? (
                <UdaciSlider
                  value={value}
                  onChange={(value) => this.slide(key, value)}
                  {...rest}
                />
              ) : (
                <UdaciStepper
                  value={value}
                  onIncrement={() => this.increment(key)}
                  onDecrement={() => this.decrement(key)}
                  {...rest}
                />
              )}
            </View>
          );
        })}
        <SubmitBtn onPress={this.submit} />
      </View>
    );
  }
}
function mapStateToProps (state) {
  const key = timeToString()
  if (typeof state !== 'undefined') {
  return {
  alreadyLogged: state[key] && typeof state[key].today === 'undefined'
  }
  }
  return {}
  }
export default connect(mapStateToProps)(AddEntry)
const styles = StyleSheet.create({
  container:{
    flex:1,
    padding:20,
    backgroundColor:white,

  },
  row:{
    flex:1,
    flexDirection:'row',
    alignItems:'center'
  }
  ,iosButtton:{
    color:white,
    fontSize:22,
    borderRadius:10,
    padding:7,
    height: 45,
    marginLeft: 40,
    marginRight:40,
    backgroundColor:purple
  },
  androidBtn:{
    color:white,
    fontSize:22,
    borderRadius:2,
    marginLeft: 40,
    marginRight:40,
    padding:7,
    height: 45,
    backgroundColor:purple,
    justifyContent: 'center',
    alignItems:'center',
    alignSelf:'flex-end'
  },
  submitBtnText:{
    color:white,
    fontSize:22,
    textAlign:'center'

  },
  center :{
    flex:1,
    justifyContent: 'center',
    alignItems:'center',
  }
});

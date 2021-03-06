import React, { Component } from 'react'
import { View, Text } from 'react-native'
import { connect } from 'react-redux'
import { receiveEntry, addEntry } from '../actions'
import { timeToString, getDailyReminderValue } from '../utils/helper'
import { fetchCalendarResults } from '../utils/api'
import {Agenda as UdaciFitnessCalendar } from 'react-native-calendars'
class History extends Component {
    componentDidMount () {
        const { dispatch } = this.props
    
        fetchCalendarResults()
          .then((entries) => dispatch(receiveEntry(entries)))
          .then(({ entries }) => {
            if (!entries[timeToString()]) {
              dispatch(addEntry({
                [timeToString()]: getDailyReminderValue()
              }))
            }
          })
          .then(() => this.setState(() => ({ready: true})))
      }
      renderItem = ({ today, ...metrics }, formattedDate, key) => (
        <View>
          {today
            ? <Text>{JSON.stringify(today)}</Text>
            : <Text>{JSON.stringify(metrics)}</Text>}
        </View>
      )
      renderEmptyDate(formattedDate) {
        return (
          <View>
            <Text>{JSON.stringify(this.props)}</Text>
            <Text>No Data for this day</Text>
          </View>
        )
      }
    render() {
        const {entries} =  this.props
        alert(entries)
        return (
           
                <UdaciFitnessCalendar
                items={entries}
                renderItem={this.renderItem}
                renderEmptyDate={this.renderEmptyDate}/>
            
        )
    }
}

function mapStateToProps(entries={}){
return{
    entries
}
}

export default connect(mapStateToProps)(History)
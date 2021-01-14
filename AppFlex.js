import React, { Component } from 'react'
import { StyleSheet, Text, View, AppRegistry } from 'react-native'

class App extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.box}/>
        <View style={styles.box2}/>
        <View style={styles.box3}/>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    flexDirection:"row",
    justifyContent: 'flex-end',
    marginHorizontal: 20,
    marginVertical:20,
    justifyContent:'flex-start'
  },
  box: {
    flex:1,
    height: 50,
    width: 50,
    backgroundColor: '#ccc',
    margin: 10,
    flexWrap:"wrap",
    borderRadius:10,
    shadowColor:'red',
    shadowOpacity:.5,
    shadowRadius: 10,
    
    
  },
  box2: {
    flex:2,
    height: 50,
    width: 50,
    backgroundColor: '#ccc',
    margin: 10,
    flexWrap:"wrap",
    borderRadius:10,
    shadowColor:'red',
    shadowOpacity:.5,
    shadowRadius: 10,
    
    
  },
  box3: {
    flex:3,
    height: 50,
    width: 50,
    backgroundColor: '#ccc',
    margin: 10,
    flexWrap:"wrap",
    borderRadius:10,
    shadowColor:'red',
    shadowOpacity:.5,
    shadowRadius: 10,
    
    
  }
})

export default App;

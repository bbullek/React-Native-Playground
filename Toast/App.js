/**
 * React Native: Toast Component
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
    ScrollView,
    Text,
    TextInput,
    View,
    Button,
    Platform,
    StyleSheet,
    TouchableHighlight
} from 'react-native';

import Toast, {DURATION} from 'react-native-easy-toast';

export default class App extends Component {

  render() {
    return (
      <View style={{padding: 20}}>
        <Text 
          style={{fontSize: 27}}>
          Login
        </Text>
        <TextInput placeholder='Username' />
        <TextInput placeholder='Password' />
        <View style={{margin:7}} />
        <Button 
          onPress={()=>{
              this.refs.toast.show('Invalid credentials. Try again or else', DURATION.LENGTH_LONG);
          }}
          title="Submit"
        />
        <Toast
          ref="toast"
          style={{backgroundColor:'#666666'}}
          position='bottom'
          positionValue={100}
          fadeInDuration={750}
          fadeOutDuration={1000}
          opacity={0.9}
          textStyle={{color:'white'}}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  }
});

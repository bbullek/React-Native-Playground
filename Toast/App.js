/**
 * React Native: Toast Component
 * https://github.com/facebook/react-native
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  TouchableHighlight,
  View
} from 'react-native';
import Toast, {DURATION} from 'react-native-easy-toast'

export default class App extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <TouchableHighlight
          style={{padding: 10}}
          onPress={()=>{
              this.refs.toast.show('Invalid credentials. Try again or else', DURATION.LENGTH_LONG);
          }}>
          <Text>Press me</Text>
      </TouchableHighlight>
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
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#ffffff',
    marginBottom: 5,
  },
});

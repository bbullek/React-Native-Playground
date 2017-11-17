import React, { Component } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import {GoogleSignin, GoogleSigninButton} from 'react-native-google-signin'


export default class App extends Component {

  // Check if device has Google Play installed. 
  componentWillMount() {
    GoogleSignin.hasPlayServices({ autoResolve: true });
    GoogleSignin.configure({
      iosClientId: '617324734115-od9b4l2mf95331gg9m4u0a4gggq0fpjo.apps.googleusercontent.com',
      webClientId: '617324734115-pif2nvtbd6ov2srpupq2db3ghgqmsma6.apps.googleusercontent.com'
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <GoogleSigninButton 
          style={{width: 230, height: 48}}
          size={GoogleSigninButton.Size.Standard}
          color={GoogleSigninButton.Color.Light}
          onPress={() => this.handleSigninGoogle()}
        />
      </View>
    );
  }

  handleSigninGoogle() {
    GoogleSignin.signIn().then((user) => {
      console.log(user);
    }).catch((err) => {
      console.log('WRONG SIGNIN', err);
    }).done();
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  buttonStyle: {
    padding: 8,
    paddingLeft: 15,
    paddingRight: 15,
    backgroundColor: '#F00',
    borderRadius: 5
  },
  textButtonStyle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFF'
  }
});
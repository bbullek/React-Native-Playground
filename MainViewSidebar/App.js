import React, { Component } from 'react';
import {
  AppRegistry,
  Text,
  View,
  StatusBar
} from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import {OffCanvasReveal} from 'react-native-off-canvas-menu';

import Home from './screens/screen1';
import Profile from './screens/screen2';
import AllEvents from './screens/screen3';
import Preferences from './screens/screen4';

export default class OffCanvasMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    }
  }

  render() {
    const statusBar = this.state.menuOpen ?
      <StatusBar
        backgroundColor="#222222"
        animated={true}
      />
    : null

    return (
      <View style={{flex: 1}}>

        {statusBar}

        <OffCanvasReveal
        active={this.state.menuOpen}
        onMenuPress={this.handleMenu.bind(this)}
        backgroundColor={'#222222'}
        menuTextStyles={{color: 'white'}}
        handleBackPress={true}
        menuItems={[
          {
            title: 'Home',
            icon: <Icon name="star" size={35} color='#ffffff' />,
            renderScene: <Home handleMenu={this.handleMenu.bind(this)}/>
          },
          {
            title: 'Profile',
            icon: <Icon name="user" size={35} color='#ffffff' />,
            renderScene: <Profile handleMenu={this.handleMenu.bind(this)}/>
          },
          {
            title: 'All Events',
            icon: <Icon name="calendar" size={35} color='#ffffff' />,
            renderScene: <AllEvents handleMenu={this.handleMenu.bind(this)}/>
          },
          {
            title: 'Preferences',
            icon: <Icon name="gear" size={35} color='#ffffff' />,
            renderScene: <Preferences handleMenu={this.handleMenu.bind(this)}/>
          }
        ]}/>

      </View>
    )
  }

  handleMenu() {
    const {menuOpen} = this.state
    this.setState({
      menuOpen: !menuOpen
    })
  }
}

AppRegistry.registerComponent('OffCanvasMenu', () => OffCanvasMenu)
